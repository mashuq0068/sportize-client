import { FaFilter, FaStar } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { FaFilterCircleXmark } from "react-icons/fa6";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  changeFilterState,
  clearFilter,
} from "@/redux/features/filter/filterSlice";
interface FormEvent extends React.FormEvent<HTMLFormElement> {
  target: HTMLFormElement & {
    search: {
      value: string;
    };
  };
}
const Filter = () => {
  const currentFilter = useAppSelector((state) => state.filter);
  const dispatch = useAppDispatch();
  const { brand, category, price, rating, sort, searchTerm } = currentFilter;
  const handleBrand = (data: string) => {
    const newFilter = {
      ...currentFilter,
      brand: data,
    };
    dispatch(changeFilterState(newFilter));
  };
  const handleCategory = (data: string) => {
    const newFilter = {
      ...currentFilter,
      category: data,
    };
    dispatch(changeFilterState(newFilter));
  };
  const handleMaxPrice = (data: string) => {
    const newFilter = {
      ...currentFilter,
      price: Number(data),
    };
    dispatch(changeFilterState(newFilter));
  };
  const handleRating = (data: string) => {
    const newFilter = {
      ...currentFilter,
      rating: data,
    };
    dispatch(changeFilterState(newFilter));
  };
  const handleSortByPrice = (data: string) => {
    const newFilter = {
      ...currentFilter,
      sort: data,
    };
    dispatch(changeFilterState(newFilter));
  };
  const handleClearFilter = () => {
    dispatch(clearFilter());
  };
  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    const searchTerm = e.target.search.value;
    const newFilter = {
      ...currentFilter,
      searchTerm,
    };
    dispatch(changeFilterState(newFilter));
  };
  return (
    <div className=" lg:mt-12 mt-5">
      {/* search */}
      <div className="flex md:justify-normal justify-between gap-5">
        <p className=" whitespace-nowrap text-xl flex gap-2 items-center font-medium">
          Filter Products <FaFilter />
        </p>
        <form
          onSubmit={handleSearch}
          className="relative md:block hidden  w-full"
        >
          <input
            defaultValue={searchTerm}
            type="text"
            name="search"
            className=" focus:outline-none  border px-4 py-2 border-slate-300 w-full"
            placeholder="Search by product name"
          />
          <button className=" bg-black text-white px-4 py-1 absolute right-0 h-full">
            <IoSearch />
          </button>
        </form>
        <div className=" whitespace-nowrap">
          <button
            onClick={handleClearFilter}
            className="bg-black text-white px-4 py-2 flex gap-2 items-center"
          >
            Clear Filter <FaFilterCircleXmark className=" text-xl" />
          </button>
        </div>
      </div>
      {/* mobile search */}
      <div>
        <form
          onSubmit={handleSearch}
          className="relative md:hidden mt-5 block w-full"
        >
          <input
            type="text"
            name="search"
            className="  border px-4 py-2 border-slate-300 w-full"
            placeholder="Search by product name"
          />
          <button className=" bg-black text-white px-4 py-1 absolute right-0 h-full">
            <IoSearch />
          </button>
        </form>
      </div>
      {/* filters */}
      <div className="mt-5 flex gap-5  justify-center flex-wrap">
        {/* brand */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button
              className={`${
                brand ? "bg-black text-white" : "bg-white text-black"
              } relative  px-6 py-2 w  overflow-hidden border border-black   text-black shadow-2xl transition-all before:absolute before:left-0 before:top-0 before:h-full before:w-0 before:duration-500 after:absolute after:right-0 after:top-0 after:h-full after:w-0 after:duration-500 hover:text-white hover:shadow-black hover:before:w-2/4 hover:before:bg-black hover:after:w-2/4 hover:after:bg-black uppercase`}
            >
              <span className="relative z-10 flex gap-2 items-center">
                Brand
              </span>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="border border-slate-300 mt-3 w-max md:w-36">
            <DropdownMenuRadioGroup value={brand} onValueChange={handleBrand}>
              <DropdownMenuRadioItem value="puma">Puma</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="nike">Nike</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="adidas">
                Adidas
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="reebok">
                Reebok
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="asics">
                Asics{" "}
              </DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
        {/* category */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button
              className={`${
                category ? "bg-black text-white" : "bg-white text-black"
              } relative  px-6 py-2 w  overflow-hidden border border-black   text-black shadow-2xl transition-all before:absolute before:left-0 before:top-0 before:h-full before:w-0 before:duration-500 after:absolute after:right-0 after:top-0 after:h-full after:w-0 after:duration-500 hover:text-white hover:shadow-black hover:before:w-2/4 hover:before:bg-black hover:after:w-2/4 hover:after:bg-black uppercase`}
            >
              <span className="relative z-10 flex gap-2 items-center">
                Category
              </span>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="border border-slate-300 mt-3 w-max md:w-36">
            <DropdownMenuRadioGroup
              value={category}
              onValueChange={handleCategory}
            >
              <DropdownMenuRadioItem value="golf">Golf</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="football">
                Football
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="cricket">
                Cricket
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="rugby">Rugby</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="tennis">
                Tennis
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="badminton">
                Badminton
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="basket ball">
                Basket Ball{" "}
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="baseball">
                Baseball
              </DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
        {/* max price */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button
              className={`${
                price ? "bg-black text-white" : "bg-white text-black"
              } relative  px-6 py-2 w  overflow-hidden border border-black   text-black shadow-2xl transition-all before:absolute before:left-0 before:top-0 before:h-full before:w-0 before:duration-500 after:absolute after:right-0 after:top-0 after:h-full after:w-0 after:duration-500 hover:text-white hover:shadow-black hover:before:w-2/4 hover:before:bg-black hover:after:w-2/4 hover:after:bg-black uppercase`}
            >
              <span className="relative z-10 flex gap-2 items-center">
                Max Price
              </span>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="border border-slate-300 mt-3 w-max md:w-36">
            <DropdownMenuRadioGroup
              value={price?.toString()}
              onValueChange={handleMaxPrice}
            >
              <DropdownMenuRadioItem value="500">$500</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="400">$400</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="300">$300</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="200">$200</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="100">$100</DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
        {/* rating*/}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button
              className={`${
                rating ? "bg-black text-white" : "bg-white text-black"
              } relative  px-6 py-2 w  overflow-hidden border border-black   text-black shadow-2xl transition-all before:absolute before:left-0 before:top-0 before:h-full before:w-0 before:duration-500 after:absolute after:right-0 after:top-0 after:h-full after:w-0 after:duration-500 hover:text-white hover:shadow-black hover:before:w-2/4 hover:before:bg-black hover:after:w-2/4 hover:after:bg-black uppercase`}
            >
              <span className="relative z-10 flex gap-2 items-center">
                Rating
              </span>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="border w-max   border-slate-300 mt-3 ">
            <DropdownMenuRadioGroup
              value={rating?.toString()}
              onValueChange={handleRating}
            >
              <DropdownMenuRadioItem
                className="flex gap-2 items-center"
                value="5-4"
              >
                5-4 <FaStar className=" text-amber-500" />
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem
                className="flex gap-2 items-center"
                value="4-3"
              >
                4-3 <FaStar className=" text-amber-500" />
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem
                className="flex gap-2 items-center"
                value="3-2"
              >
                3-2 <FaStar className=" text-amber-500" />
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem
                className="flex gap-2 items-center"
                value="2-1"
              >
                2-1 <FaStar className=" text-amber-500" />
              </DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
        {/* sort by price*/}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button
              className={`${
                sort ? "bg-black text-white" : "bg-white text-black"
              } relative  px-6 py-2 w  overflow-hidden border border-black   text-black shadow-2xl transition-all before:absolute before:left-0 before:top-0 before:h-full before:w-0 before:duration-500 after:absolute after:right-0 after:top-0 after:h-full after:w-0 after:duration-500 hover:text-white hover:shadow-black hover:before:w-2/4 hover:before:bg-black hover:after:w-2/4 hover:after:bg-black uppercase`}
            >
              <span className="relative z-10 flex gap-2 items-center">
                sort by price
              </span>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="border w-max   border-slate-300 mt-3 ">
            <DropdownMenuRadioGroup
              value={sort}
              onValueChange={handleSortByPrice}
            >
              <DropdownMenuRadioItem
                className="flex gap-2 items-center"
                value="price"
              >
                Ascending
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem
                className="flex gap-2 items-center"
                value="-price"
              >
                Descending
              </DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Filter;
