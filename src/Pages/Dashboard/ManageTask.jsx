// import { useQuery } from "@tanstack/react-query";
// import useAxiosData from "../../Components/CustomHook/useAxiosData";
// import AuthInfo from "../../Components/CustomHook/AuthInfo";


import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import ListTasks from "./manageTask/ListTasks";

const ManageTask = () => {

  return (
    <DndProvider backend={HTML5Backend}>
      <ListTasks></ListTasks>
    </DndProvider>
  );
};

export default ManageTask;
