import { Outlet } from "react-router-dom";
import Header from "../Pages/Header/Header";
import Nav from "../Pages/Header/Nav";

const Root = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;