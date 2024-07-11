import { FaFilter } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { FaFilterCircleXmark } from "react-icons/fa6";

const Filter = () => {
  return (
    <div className=" lg:mt-12 mt-5">
      <div className="flex md:justify-normal justify-between gap-5">
        <p className=" whitespace-nowrap text-xl flex gap-2 items-center font-medium">
          Filter Products <FaFilter />
        </p>
        <form className="relative md:block hidden  w-full">
          <input
            type="text"
            className=" focus:outline-none  border px-4 py-2 border-slate-300 w-full"
            placeholder="Search by product name"
          />
          <button className=" bg-black text-white px-4 py-1 absolute right-0 h-full">
            <IoSearch />
          </button>
        </form>
        <div className=" whitespace-nowrap">
          <button className="bg-black text-white px-4 py-2 flex gap-2 items-center">
            Clear Filter <FaFilterCircleXmark className=" text-xl" />
          </button>
        </div>
      </div>
      {/* mobile search */}
      <div>
        <form className="relative md:hidden mt-5 block w-full">
          <input
            type="text"
            className=" focus:outline-none  border px-4 py-2 border-slate-300 w-full"
            placeholder="Search by product name"
          />
          <button className=" bg-black text-white px-4 py-1 absolute right-0 h-full">
            <IoSearch />
          </button>
        </form>
      </div>

      {/* filters */}
    </div>
  );
};

export default Filter;
