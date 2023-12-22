import { useQuery } from "@tanstack/react-query";
import AuthInfo from "../../../Components/CustomHook/AuthInfo";
import useAxiosData from "../../../Components/CustomHook/useAxiosData";
// import TodoList from "./TodoList";
import { useEffect, useState } from "react";
// import Completed from "./Completed";
// import Ongoing from "./Ongoing";
import { MdDelete } from "react-icons/md";
import { IoMdEye } from "react-icons/io";
import { useDrag, useDrop } from "react-dnd";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const ListTasks = () => {
//   const [tasksM, setTasks] = useState([]);
  

  const statuses = ["Todo", "Ongoing", "Completed"];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {statuses.map((item, index) => (
        <Section
          key={index}
          status={item}
        //   todos={todos}
        //   inProgress={inProgress}
        //   closed={closed}
        ></Section>
      ))}
    </div>
  );
};

export default ListTasks;

const Section = ({ status }) => {
    const [todos, setTodos] = useState([]);
    const [inProgress, setInProgress] = useState([]);
    const [closed, SetClosed] = useState([]);
    const { user } = AuthInfo();
    const axiosData = useAxiosData();
  
    const { data: tasks = [],refetch } = useQuery({
      queryKey: ["tasks"], // unique string to identify the request (required)
      queryFn: async () => {
        const res = await axiosData.get("/task");
        return res.data;
      },
    });
  
    useEffect(() => {
      const displayOwnTask = tasks.filter((item) => item.email === user?.email);
      const fTodos = displayOwnTask.filter((task) => task.status === "Todo");
      const fInProgress = displayOwnTask.filter(
        (task) => task.status === "Ongoing"
      );
      const fClosed = displayOwnTask.filter((task) => task.status === "Completed");
  
      // setTasks(displayOwnTask);
      setTodos(fTodos);
      setInProgress(fInProgress);
      SetClosed(fClosed);
    }, [tasks,user?.email]);


    const [{ isOver }, drop] = useDrop(() => ({
        accept: "task",
        drop: (item) => addItemToSection(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
      }));


  let tasksToMap = todos;

  if (status === "Ongoing") {
    tasksToMap = inProgress;
  }
  if (status === "Completed") {
    tasksToMap = closed;
  }
//   const axiosData = useAxiosData();
  const addItemToSection = id => {
    const statusInfo = {status : status};
    // console.log(object);
    axiosData.patch(`/task/${id}`,statusInfo)
    .then(res => {
        if (res.data.modifiedCount > 0) {
            toast.success('updated')
            refetch()
          }
    })
  }

//   delete

const handleDelete = id => {
    axiosData.delete(`/task/${id}`).then(res=>{
        if(res.data){
            toast.error("Deleted Task Successfully!")
            refetch()
        }
    })
}
  return (
    <div ref={drop} className={`${isOver ? 'bg-slate-600' : ''} rounded-sm overflow-hidden bg-slate-900 p-3 min-h-32`}>
      <div className="header bg-slate-700 p-1 rounded-xl">
        <h2 className="text-lg font-semibold text-center">{status}</h2>
        
      </div>
      <ul>
          {tasksToMap?.map((item) => (
            <Task item={item} handleDelete={handleDelete} key={item._id}></Task>
          ))}
        </ul>
    </div>
  );
};

const Task = ({ item,handleDelete }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "task",
    item: {id : item._id},
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  console.log(isDragging);

  return (
    <li ref={drag} className={`bg-slate-800 cursor-grab p-2 rounded-lg my-3 ${isDragging ? 'opacity-25' : 'opacity-100'}` }>
      <div className="flex justify-between items-center ">
        <span>{item.title}</span>
        <div className="flex items-center gap-3 ">
          <Link to={`/dashboard/viewTask/${item._id}`}><button className=" bg-success capitalize p-1 rounded ">
            <IoMdEye />
          </button></Link>
          <button onClick={()=>handleDelete(item._id)} className="bg-error p-1 rounded capitalize">
            <MdDelete className="text-[16px]" />
          </button>
        </div>
      </div>
    </li>
  );
};
