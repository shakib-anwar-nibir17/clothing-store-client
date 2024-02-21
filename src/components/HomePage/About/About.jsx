import aboutPic from "../../../assets/images/single-image1.jpg";

const About = () => {
  return (
    <div className="flex h-[600px] mt-10 mb-10">
      <div className="w-1/3 h-full bg-black text-white flex flex-col justify-center">
        <h1 className="text-4xl mb-6 text-center pt-4">About us</h1>
        <p className="text-xl mb-6 text-center p-4">
          YZ Store is a contemporary fashion destination known for its curated
          selection of stylish apparel and accessories. Catering to
          fashion-forward individuals seeking both trendsetting pieces and
          timeless classics.
        </p>
      </div>
      <div className="w-2/3 h-full">
        <img className="w-full h-full" src={aboutPic} alt="" />
      </div>
    </div>
  );
};

export default About;
