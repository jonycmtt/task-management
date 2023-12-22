import { MdDelete } from "react-icons/md";
import { IoMdEye } from "react-icons/io";
import { useDrag } from "react-dnd";

const TodoList = () => {
  // const [{ isDragging }, drag] = useDrag(() => ({
  //   type: "Task",
  //   item: {id : item._id},
  //   collect: (monitor) => ({
  //     isDragging: !!monitor.isDragging()
  //   })
  // }))

//   console.log(item._id);

  return (
    <div>
      hello todo
    </div>
    // <li ref={drag} className={`bg-slate-800 cursor-grab p-2 rounded-lg my-3 ${isDragging ? 'opacity-25' : 'opacity-100'}` }>
    //   <div className="flex justify-between items-center ">
    //     <span>{item.title}</span>
    //     <div className="flex items-center gap-3 ">
    //       <button className=" bg-success capitalize p-1 rounded ">
    //         <IoMdEye />
    //       </button>
    //       <button className="bg-error p-1 rounded capitalize">
    //         <MdDelete className="text-[16px]" />
    //       </button>
    //     </div>
    //   </div>
    // </li>
  );
};

export default TodoList;
