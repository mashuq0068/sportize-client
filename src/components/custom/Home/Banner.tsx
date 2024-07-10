import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // import Swiper styles
import { Autoplay } from "swiper/modules";
import { FaQuoteLeft } from "react-icons/fa6";
import { FaQuoteRight } from "react-icons/fa6";

const slides = [
  {
    name: "Michel Jordan ~ Basketball Player",
    description:
      "Michael Jordan, the epitome of excellence in basketball has inspired generations with his unmatched talent, fierce competitiveness, and relentless work ethic. His journey from humble beginnings to becoming a global icon shows that greatness is achieved through perseverance and dedication. Gear up with premium sporting goods from our website.",
    image: "/images/jordan.png",
  },
  {
    name: "Cristiano Ronaldo ~ Football Player",
    description:
      "Cristiano Ronaldo, a symbol of relentless hard work, discipline, and extraordinary talent, has risen to become one of the greatest footballers in history. His unwavering commitment to excellence and fitness inspires athletes worldwide to strive for their best. Elevate your game with top-quality sporting goods from our website and channel the spirit of a champion like Ronaldo",
    image: "/images/ronaldo.png",
  },
  {
    name: "Lionel Messi ~ Football Player",
    description:
      "Lionel Messi, a living legend in the world of soccer, epitomizes dedication, perseverance, and unparalleled skill.Equip yourself with the best sporting goods from our website and follow in the footsteps of a true champion, striving for excellence every day.Let Messi's legacy fuel your passion and drive you to reach new heights in your sporting endeavors. ",

    image: "/images/messi-2.png",
  },
  {
    name: "Virat Kohli ~ Cricket Player",
    description:
      "Virat Kohli, a modern-day cricket legend, is known for his incredible skill, unwavering dedication, and passionate approach to the game. His journey from a talented youngster to one of the best batsmen in the world is a testament to his hard work and determination. Equip yourself with the finest sporting goods from our website and embrace the spirit of excellence, just like Virat Kohli.",
    image: "/images/kohli.png",
  },
];

const Banner = () => {
  return (
    <Swiper
      modules={[Autoplay]}
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      className=" mt-8  lg:max-w-[80%]  lg:drop-shadow-lg lg:shadow-lg rounded-lg lg:shadow-black "
    >
      {slides?.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="flex md:flex-row flex-col-reverse lg:gap-[5%] lg:items-center lg:justify-center">
            <div className="flex-1 md:mt-0 mt-[40px] lg:text-left text-center ">
              <p className=" lg:pl-24 md:pl-16 md:p-0 p-5">
                {" "}
                <FaQuoteLeft className="inline-block mr-2" />
                {slide.description}
                <FaQuoteRight className="inline-block ml-2" />{" "}
              </p>
              <p className="font-semibold text-xl mt-[5vh] md:pl-16 lg:pl-24">{slide?.name}</p>
            </div>
            <div className="max-h-[500px] flex-1   lg:w-[50%] overflow-hidden">
              <img
                src={slide?.image}
                alt={`Slide ${index + 1}`}
                className="w-full  flex-1 lg:h-[500px] h-[200px] md:h-[250px]  object-contain"
              />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Banner;
