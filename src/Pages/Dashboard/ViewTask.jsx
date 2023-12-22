import { Link, useLoaderData } from "react-router-dom";

const ViewTask = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div className="border max-w-xl mx-auto p-5 px-10 rounded">
      <h2 className="text-2xl font-semibold text-center">View Task</h2>
      <h2 className="text-xl font-semibold">Task Name : {data.title}</h2>

      <p>Description: {data.description}</p>
      <div className="flex gap-2 my-4">
        <span className="border p-1 rounded bg-primary text-black">
          {data.dateline}
        </span>
        <span className="border p-1 rounded bg-info text-black">
          {data.priority}
        </span>
      </div>

      <div>
        <h2 className="text-xl font-semibold">Creator Info</h2>
        <p>Name : {data.userName}</p>
        <p>Name : {data.email}</p>
      </div>
      <div className="text-center mt-5">
        <Link to={`/dashboard/update/${data._id}`}><button  className="btn btn-success btn-sm">Update Task</button></Link>
      </div>
    </div>
  );
};

export default ViewTask;
