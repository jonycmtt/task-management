import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Link, Outlet } from "react-router-dom";
import HomeDashboard from "../Pages/Dashboard/HomeDashboard";

const Dashboard = () => {
  // create task
  // const handleTaskCreate = () => {
  //    console.log('hello');
  // }

  return (
    <div className="max-w-6xl mx-auto">
        <HomeDashboard></HomeDashboard>
        <Outlet></Outlet>
        <ToastContainer></ToastContainer>
    </div>
  );
};

export default Dashboard;
