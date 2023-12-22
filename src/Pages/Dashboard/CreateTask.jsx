import { ToastContainer, toast } from "react-toastify";
import useAxiosData from "../../Components/CustomHook/useAxiosData";
import { useNavigate } from "react-router-dom";
import AuthInfo from "../../Components/CustomHook/AuthInfo";

const CreateTask = () => {
    
    const axiosData = useAxiosData()
    const {user} = AuthInfo()
    const navigate = useNavigate()

    const  handleCreateTask = event => {
        event.preventDefault();
        const form = event.target;
        const title  = form.title.value;
        const description = form.description.value;
        const dateline = form.dateline.value;
        const priority = form.priority.value;

        const createTaskInfo = {
            title,description,dateline,priority, userName : user?.displayName,email : user?.email,status: 'Todo'
        }
        // console.log(createTaskInfo);
        axiosData.post('/task', createTaskInfo)
        .then(res => {
            console.log(res.data);
            if(res.data.insertedId) {
                toast.success('success create Task')
                navigate('/dashboard/manageTask')
              }
        })

        
    }
  return (
    <div className="border border-slate-600 max-w-4xl mx-auto p-6 rounded-md mb-10">
      <h1 className="text-center text-2xl font-semibold">Create Task</h1>

      <form onSubmit={handleCreateTask}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Title</span>
          </label>
          <input
            type="text"
            placeholder="Task title"
            className="input input-bordered"
            required
            name="title"
          />
        </div>
        <div className="flex flex-col md:flex-row gap-10 w-full">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Deadline</span>
            </label>
            <input required
              type="date"
              className="input input-bordered"
              name="dateline"
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Priority</span>
            </label>
            <select required name="priority" className="select input-bordered select-ghost w-full">
              <option disabled selected>
                Select Priority
              </option>
              <option value='low'>Low</option>
              <option value='moderate'>moderate</option>
              <option value='high'>high</option>
            </select>
          </div>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <textarea required name="description"
            className="input input-bordered resize-none h-20"
            placeholder="Write Description About Task"
          >
            
          </textarea>
        </div>
        <div className="text-center mt-5">
            <input className="btn btn-outline btn-primary text-white" type="submit" value='Added Task'/>
        </div>
      </form>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default CreateTask;
