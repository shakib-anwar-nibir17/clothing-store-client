import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";

const Login = () => {
  const { userSignIn } = useAuth();
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);

    userSignIn(email, password)
      .then((res) => {
        console.log(res.user);
        Swal.fire({
          icon: "success",
          title: "Login Successful",
          text: "Check if you have typed the correct password or email",
        });
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          icon: "error",
          title: "Invalid Login Credential",
          text: "Check if you have typed the correct password or email",
        });
      });
  };
  return (
    <>
      <div className="rounded-md w-[90%] px-6 lg:px-0 lg:w-1/3 border-2 border-black mx-auto mt-10">
        <h2 className="text-4xl  font-bold mt-12 text-center">Please Login</h2>
        <form onSubmit={handleLogin} className="lg:card-body w-full">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Your email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Your password"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-blue-600 text-white font-semibold hover:bg-black">
              Sign in
            </button>
          </div>
        </form>
        <p className="text-center font-medium">or Sign In With</p>

        <p className="text-center font-medium mt-8 mb-10">
          Do not have an account?
          <span className="text-blue-600 ml-2">
            <Link to="/register">Sign Up</Link>
          </span>
        </p>
      </div>
    </>
  );
};

export default Login;
