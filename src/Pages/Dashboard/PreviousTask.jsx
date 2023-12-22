import { useQuery } from "@tanstack/react-query";
import useAxiosData from "../../Components/CustomHook/useAxiosData";
import AuthInfo from "../../Components/CustomHook/AuthInfo";

const PreviousTask = () => {
  const axiosData = useAxiosData();
  const { user } = AuthInfo();
  const { data: tasks = [] } = useQuery({
    queryKey: ["tasks"], // unique string to identify the request (required)
    queryFn: async () => {
      const res = await axiosData.get("/task");
      return res.data;
    },
  });
  const displayOwnTask = tasks.filter((item) => item.email === user?.email);

  console.log(displayOwnTask);
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Title</th>
              <th>Description</th>
              <th>DateLine</th>
              <th>Priority</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {
                displayOwnTask?.map((item,index) => <tr key={item._id}>
                <th>{index + 1}</th>
                <td>{item.title}</td>
                <td>{item.description}</td>
                <td>{item.dateline}</td>
                <td>{item.priority}</td>
              </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PreviousTask;
