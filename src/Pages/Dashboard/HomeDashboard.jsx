import { Link } from "react-router-dom";

const HomeDashboard = () => {
  return (
    <div className="py-5">
      <h2 className="text-4xl font-semibold text-center">
        Daily Task Management
      </h2>
      <p className="text-center text-xl font-semibold">
        &ldquo;Dashboard&ldquo;
      </p>

      <div className="flex gap-8 mt-16 mb-6 justify-center">
        <Link to="/dashboard/manageTask">
          <button className="btn btn-success text-white">Manage Task</button>
        </Link>
        <Link to="/dashboard/createTask">
          <button className="btn btn-success text-white">Create Task</button>
        </Link>
        <Link to="/dashboard/previousTask">
          <button className="btn btn-success text-white">Previous tasks</button>
        </Link>
      </div>
    </div>
  );
};

export default HomeDashboard;
