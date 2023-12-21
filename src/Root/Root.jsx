import { Outlet } from "react-router-dom";
// import Header from "../Pages/Header/Header";
import Nav from "../Pages/Header/Nav";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Root = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
            <ToastContainer autoClose={1000}></ToastContainer>
        </div>
    );
};

export default Root;