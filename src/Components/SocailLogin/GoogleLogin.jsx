import { FaGooglePlusG } from "react-icons/fa";
import AuthInfo from "../CustomHook/AuthInfo";
import { useNavigate } from "react-router-dom";
const GoogleLogin = () => {

  const { googleSignIn } = AuthInfo();
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    googleSignIn()
      .then((result) => {
        console.log(result.user);
        navigate('/dashboard/manageTask')
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div>
      <div className="text-center mb-4">
        <button onClick={handleGoogleLogin} className="btn btn-neutral">
          <FaGooglePlusG />
          <span>Login with Google</span>
        </button>
      </div>
    </div>
  );
};

export default GoogleLogin;
