import { Navigate, useLocation } from "react-router-dom";
import AuthInfo from "../../Components/CustomHook/AuthInfo";

const PrivateRoute = ({children}) => {
    const {user,loading} = AuthInfo()
    const location = useLocation()
    if(loading) {
        return <span>loading...</span>
    }
    if(user) {
        return children
    }
  return <Navigate to='/' state={{from :location}} replace></Navigate>

};

export default PrivateRoute;