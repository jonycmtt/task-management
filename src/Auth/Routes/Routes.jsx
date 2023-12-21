import { createBrowserRouter } from "react-router-dom";
import Root from "../../Root/Root";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Blog from "../../Pages/Blog";
import About from "../../Pages/About";
import Contact from "../../Pages/Contact";
import Home from "../../Pages/Home";
import Login from "../../Pages/userInfo/Login.jsx";
import Register from "../../Pages/userInfo/Register.jsx";
import Dashboard from "../../Root/Dashboard.jsx";
import CreateTask from "../../Pages/Dashboard/CreateTask.jsx";
import ManageTask from "../../Pages/Dashboard/ManageTask.jsx";
import PreviousTask from "../../Pages/Dashboard/PreviousTask.jsx";

const router = createBrowserRouter([
    // public routes
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
      {
        path: "about",
        element: <About></About>,
      },
      {
        path: "contact",
        element: <Contact></Contact>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
    ],
  },
  // dashboard routes
  {
    path: "dashboard",
    element : <Dashboard></Dashboard>,
    children:[
        {
            path: 'createTask',
            element : <CreateTask></CreateTask>
        },
        {
            path: 'previousTask',
            element : <PreviousTask></PreviousTask>
        },
        {
            path: 'manageTask',
            element : <ManageTask></ManageTask>
        },
    ]
  },
//   {
//     path : 'createTask',
//     element : <CreateTask></CreateTask>
//   }
]);

export default router;
