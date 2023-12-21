import { useContext } from "react";
import { AuthContext } from "../../Auth/AuthProvider/AuthProvider";

const AuthInfo = () => {
    const authInfo = useContext(AuthContext)
    return authInfo;
    
};

export default AuthInfo;