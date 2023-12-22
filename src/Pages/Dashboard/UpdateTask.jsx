import { useLoaderData, useNavigate } from "react-router-dom";
import useAxiosData from "../../Components/CustomHook/useAxiosData";
import { toast } from "react-toastify";
import AuthInfo from "../../Components/CustomHook/AuthInfo";

const UpdateTask = () => {
  const data = useLoaderData();
  const {_id} = data;
  
  
  const axiosData = useAxiosData()
  const navigate = useNavigate()
  const {user} = AuthInfo()

  const handleUpdateTask = (event) => {
    console.log(_id);
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const description = form.description.value;
    const dateline = form.dateline.value;
    const priority = form.priority.value;

    const updateTaskInfo = {
      title,
      description,
      dateline,
      priority,
      userName : user?.displayName,email : user?.email,status: 'Todo'
    };
    // console.log(createTaskInfo);
    axiosData.patch(`/task/update/${_id}`,updateTaskInfo)
    .then(res => {
        if (res.data.modifiedCount > 0) {
            toast.success('updated')
            navigate('/dashboard/manageTask')
          }
    })
  };
  return (
    <div className="max-w-4xl mx-auto border px-6 py-5 rounded">
      <h2 className="text-2xl text-center font-semibold">Update</h2>
      <form onSubmit={handleUpdateTask}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Title</span>
          </label>
          <input
            type="text"
            defaultValue={data.title}
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
            <input
              required
              //   defaultValue={data.dateLine}
              type="date"
              className="input input-bordered"
              name="dateline"
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Priority</span>
            </label>
            <select
              required
              name="priority"
              //   defaultValue={data.priority}
              className="select input-bordered select-ghost w-full"
            >
              <option disabled selected>
                Select Priority
              </option>
              <option value="low">Low</option>
              <option value="moderate">moderate</option>
              <option value="high">high</option>
            </select>
          </div>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <textarea
            defaultValue={data.description}
            required
            name="description"
            className="input input-bordered resize-none h-20"
            placeholder="Write Description About Task"
          ></textarea>
        </div>
        <div className="text-center mt-5">
          <input
            className="btn btn-outline btn-primary text-white"
            type="submit"
            value="Update Task"
          />
        </div>
      </form>
    </div>
  );
};

export default UpdateTask;
