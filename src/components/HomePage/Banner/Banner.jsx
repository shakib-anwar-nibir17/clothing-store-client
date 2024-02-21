const Banner = () => {
  return (
    <>
      <div
        className="bg-cover h-[70vh] flex flex-col justify-center items-start"
        style={{
          backgroundImage: "url('https://i.ibb.co/2j9GrN9/banner1.jpg')",
        }}
      >
        <div className="flex flex-col justify-center items-start lg:px-8">
          <h2 className="w-3/4 text-5xl font-extrabold text-black">
            CHECK OUT NEW FEATURED COLLECTION
          </h2>
          <button className="bg-blue-600 p-4 w-1/4 md:w-1/6 mt-4 text-white font-bold">
            Explore
          </button>
        </div>
      </div>
    </>
  );
};

export default Banner;
