import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://cdn.pixabay.com/photo/2020/03/03/12/51/female-4898690_1280.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">
            Streamline Your Workflow with Ease
          </h1>
          <p className="mb-5">
            TaskForge: Elevate your productivity with our seamless task
            management solution. Effortlessly organize, prioritize, and conquer
            your to-do list. Experience a new level of efficiency today
          </p>
          <Link to="/login">
            <button className="btn btn-primary">Let’s Explore</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
