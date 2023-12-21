import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import AuthInfo from "../../Components/CustomHook/AuthInfo";

const Login = () => {

    const {userLogin} = AuthInfo()
    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);
        
        userLogin(email,password)
        .then(result => {
            console.log(result.user);
            toast.success('Login Success')
            navigate('/dashboard/manageTask')
        }) .catch(error => console.log(error.message))
    }
  return (
    <div className="card w-full max-w-md shadow-2xl mx-auto mt-6 bg-base-100">
      <form onSubmit={handleSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="email"
            className="input input-bordered"
            required
            name="email"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="password"
            className="input input-bordered"
            required
            name="password"
          />
          {/* <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label> */}
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <div className="text-center pb-3">
        <p>Don&lsquo;t have an account yet ? Please <Link to='/register' className="text-blue-500">Register</Link> </p>
      </div>
      {/* <ToastContainer autoClose={1000}></ToastContainer> */}
    </div>
  ); 
};

export default Login;
