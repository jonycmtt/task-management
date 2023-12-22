import { Link, useNavigate } from "react-router-dom";
import AuthInfo from "../../Components/CustomHook/AuthInfo";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GoogleLogin from "../../Components/SocailLogin/GoogleLogin";

const Register = () => {
  const { userSignUp, updateUserProfile } = AuthInfo();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;
    // const userInfo = {name,photo,email, password};
    // console.log(userInfo);
    userSignUp(email, password)
      .then((result) => {
        console.log(result.user);
        updateUserProfile(name, photo)
          .then(() => {
            console.log("updated profile");
            toast.success("Success Register");
            navigate("/dashboard", { replace: true });
          })
          .catch((error) => console.log(error.message));
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="card w-full max-w-md shadow-2xl mx-auto mt-6 bg-base-100">
      <form onSubmit={handleSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="Your Name"
            className="input input-bordered"
            required
            name="name"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">PhotoUrl</span>
          </label>
          <input
            type="text"
            placeholder="Your Photo Url"
            className="input input-bordered"
            required
            name="photo"
          />
        </div>
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
        </div>

        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <GoogleLogin></GoogleLogin>
      <div className="text-center pb-3">
        <p>
          Already have an account ? Please{" "}
          <Link to="/login" className="text-blue-500">
            Login
          </Link>{" "}
        </p>
      </div>
      <ToastContainer autoClose={2000}></ToastContainer>
    </div>
  );
};

export default Register;
