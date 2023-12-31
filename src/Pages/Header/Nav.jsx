import { Link, NavLink } from "react-router-dom";
import AuthInfo from "../../Components/CustomHook/AuthInfo";
import { ToastContainer } from "react-toastify";

const Nav = () => {
  const { user,userLogout } = AuthInfo();
  // const {} = AuthInfo()

  const handleLogOut = () => {
    userLogout()
    .then(() => {
      console.log('user logout');
    }).catch(error => console.log(error.message))
  }
  const navList = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="blog">Blog</NavLink>
      </li>
      <li>
        <NavLink to="about">About</NavLink>
      </li>
      <li>
        <NavLink to="contact">Contact</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 max-w-6xl mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {/* {navList} */}
          </ul>
        </div>
        <a className=" md:text-3xl font-bold ">Daily Task</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        {/* <ul className="menu menu-horizontal px-1">{navList}</ul> */}
      </div>
      <div className="navbar-end">
        {user ? <div className="dropdown dropdown-end">
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
              <Link to='/dashboard/manageTask'>Dashboard</Link>
            </li>
            <li>
            <a onClick={handleLogOut}>Logout</a>
            </li>
          </ul>
        </div>
        :
        <Link to='/login'><button className="btn btn-primary btn-sm">Login</button></Link>
      
      }
        
      </div>
      {/* <ToastContainer></ToastContainer> */}
      
    </div>
  );
};

export default Nav;
