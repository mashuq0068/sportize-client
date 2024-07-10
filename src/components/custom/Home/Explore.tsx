import { GoArrowRight } from "react-icons/go";
const Explore = () => {
  return (
    <div className="w-max mx-auto mt-[10vh]">
      <button className="relative h-[50px] w-max px-12 hover:px-24 overflow-hidden border border-black bg-white text-black shadow-2xl transition-all before:absolute before:left-0 before:top-0 before:h-full before:w-0 before:duration-500 after:absolute after:right-0 after:top-0 after:h-full after:w-0 after:duration-500 hover:text-white hover:shadow-black hover:before:w-2/4 hover:before:bg-black hover:after:w-2/4 hover:after:bg-black">
        <span className="relative z-10 flex gap-2 items-center">Explore More <GoArrowRight/></span>
      </button>
    </div>
  );
};

export default Explore;
