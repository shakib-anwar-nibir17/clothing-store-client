import reviewer1 from "../../../assets/images/reviewer1.jpg";
import reviewer2 from "../../../assets/images/reviewer2.jpg";
import reviewer3 from "../../../assets/images/reviewer3.jpg";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

import "./css/style.css";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";

const Review = () => {
  return (
    <div className="mt-20 mb-28">
      <h2 className="text-3xl  text-custom-main font-bold mb-16 text-center">
        User Reviews
      </h2>
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="text-black">
            <div className="flex justify-center">
              <div className="h-[70px] w-[70px] mx-6 mb-4 mt-2">
                <img
                  className="w-full h-full rounded-full"
                  src={reviewer1}
                  alt=""
                />
              </div>
            </div>
            <p>
              I stumbled upon YZ Store while exploring the local shopping scene,
              and I am so glad I did! From the moment I stepped foot inside, I
              was greeted with warmth and enthusiasm. The staff were incredibly
              helpful, offering personalized styling tips and recommendations
              tailored to my preferences. I ended up finding the perfect outfit
              for an upcoming event, and I could not be happier with my
              purchase. YZ Store has definitely earned a loyal customer in me –
              I will be back for more soon!
            </p>
            <h2 className="font-bold mt-10">Ross Taylor</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-black">
            <div className="flex justify-center">
              <div className="h-[70px] w-[70px] mx-6 mb-4 mt-2">
                <img
                  className="w-full h-full rounded-full"
                  src={reviewer2}
                  alt=""
                />
              </div>
            </div>
            <p>
              As a discerning shopper, I am constantly on the lookout for unique
              pieces that reflect my personal style. YZ Store never disappoints!
              Their collection strikes the perfect balance between on-trend and
              timeless, and I love that I can always find something that speaks
              to my individuality. Plus, the shopping experience is a breeze –
              whether I am browsing in-store or online, I can count on YZ Store
              to deliver quality products and exceptional service every time.
            </p>
            <h2 className="font-bold mt-10">Emily Jonas</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-black">
            <div className="flex justify-center">
              <div className="h-[70px] w-[70px] mx-6 mb-4 mt-2">
                <img
                  className="w-full h-full rounded-full"
                  src={reviewer3}
                  alt=""
                />
              </div>
            </div>
            <p>
              I absolutely adore YZ Store! Their clothing selection is
              unparalleled, with pieces that effortlessly transition from day to
              night. The quality is top-notch, and every item I have purchased
              has become a staple in my wardrobe. Not to mention, their customer
              service is outstanding – knowledgeable, friendly, and always
              willing to help. YZ Store has definitely become my go-to for all
              things fashion!
            </p>
            <h2 className="font-bold mt-10">Nora Rodriguez</h2>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Review;
