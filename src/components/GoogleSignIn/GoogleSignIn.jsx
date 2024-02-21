import { useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import googlePic from "../../assets/google.png";

const GoogleSignIn = () => {
  const { signInWithGoogle } = useAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const newUser = result.user; 
        console.log(newUser);

        navigate("/");
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="form-control w-[90%] mx-auto mt-6">
      <button
        onClick={handleGoogleSignIn}
        className="btn bg-white border-2 border-black text-black font-semibold hover:bg-black hover:text-white"
      >
        <img className="w-6" src={googlePic} alt="" />
        GOOGLE
      </button>
    </div>
  );
};

export default GoogleSignIn;
