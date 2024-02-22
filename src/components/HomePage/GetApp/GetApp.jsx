import play from "../../../assets/images/pngwing 1.png";
import app from "../../../assets/images/pngwing 2.png";
const GetApp = () => {
  return (
    <div className="mt-20 mb-20 md:mb-5">
      <div
        className="container mx-auto h-[200] bg-black flex flex-col lg:flex-row py-10 rounded-[45px] items-center justify-between px-6
    "
      >
        <div className="text-white font-bold text-2xl lg:text-4xl">
          <h2>GET YZ STORE APP</h2>
        </div>
        <div className="flex flex-col lg:flex-row">
          <img src={play} alt="" />
          <img src={app} alt="" />
        </div>
      </div>
    </div>
  );
};

export default GetApp;
