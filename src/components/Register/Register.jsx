import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";

const Register = () => {
  const { createUser, handleUpdateProfile, logOut } = useAuth();
  const [registerError, setRegisterError] = useState("");
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const email = form.get("email");
    const password = form.get("password");
    console.log(name, email, password);

    setRegisterError("");

    if (password.length < 6) {
      setRegisterError("Password must have 6 characters");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setRegisterError("Password must have one capital letter");
      return;
    } else if (!/[!@#$%^&*()_+{}\\[\]:;<>,.?~\\-]/.test(password)) {
      setRegisterError("Password must have one special character");
      return;
    }

    createUser(email, password)
      .then((res) => {
        console.log(res.user);
        //update profile
        handleUpdateProfile(name).then(() => {
          logOut()
            .then((result) => console.log(result))
            .catch((error) => console.error(error));
          Swal.fire({
            icon: "success",
            title: "Congratulation!! Please Login to Proceed",
            text: "You have successfully Registered",
          });
          navigate("/login");
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <div className="rounded-md w-[90%] px-6 lg:px-0 lg:w-1/3 border-2 border-black mx-auto mt-10 ">
        <h2 className="text-4xl  font-bold mt-12 text-center">
          Create Account! Register
        </h2>
        <form onSubmit={handleRegister} className="lg:card-body w-full">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="input input-bordered"
              required
            />
          </div>
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
              Register
            </button>
          </div>
        </form>
        {registerError && (
          <p className="text-red-600 text-center mb-6">{registerError}</p>
        )}
        <p className="text-center font-medium">or Sign In With</p>

        <p className="text-center font-medium mt-8 mb-10">
          Already have an account?
          <span className="text-blue-600 ml-2">
            <Link to="/login">Login</Link>
          </span>
        </p>
      </div>
    </>
  );
};

export default Register;
