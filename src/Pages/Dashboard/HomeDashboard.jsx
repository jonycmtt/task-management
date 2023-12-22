import { Link } from "react-router-dom";
import AuthInfo from "../../Components/CustomHook/AuthInfo";

const HomeDashboard = () => {
  const {user,userLogout} = AuthInfo()

  const handleLogOut = () => {
    userLogout()
    .then(() => {
      console.log('user logout');
    }).catch(error => console.log(error.message))
  }


  return (
    <div className="py-5">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Dashboard</h2>
        <div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img alt="Tailwind CSS Navbar component" src={user?.photoURL} />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">{user?.displayName}</a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a onClick={handleLogOut}>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
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
