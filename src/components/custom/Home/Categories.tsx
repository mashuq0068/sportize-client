import { changeFilterState } from "@/redux/features/filter/filterSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { GoArrowRight } from "react-icons/go";
import { useNavigate } from "react-router-dom";

const Categories = () => {
  const dispatch = useAppDispatch();
  const currentFilter = useAppSelector((state) => state.filter);
  const navigate = useNavigate();
  const categories = [
    {
      image:
        "https://tse2.mm.bing.net/th?id=OIP.Rqg0yPXWuSI5pLmgR1dixgHaE2&pid=Api&P=0&h=220",
      name: "Golf",
    },
    {
      image:
        "https://tse1.mm.bing.net/th?id=OIP.EcUIZ2_EaxHJaArMmtZbegHaEo&pid=Api&P=0&h=220",
      name: "Football",
    },
    {
      image:
        "https://alc-live.storage.googleapis.com/upload/img_cache/file-3734-a609c28c2011b44eb6f51c274415b24f.jpg",
      name: "Cricket",
    },
    {
      image:
        "https://tse2.mm.bing.net/th?id=OIP.dkKF4a8UKWOEAJJlfAqyiQHaEo&pid=Api&P=0&h=220",
      name: "Basket Ball",
    },
    {
      image:
        "https://tse2.mm.bing.net/th?id=OIP.xZ32ubhLK6qw_Vs2_TWQLgHaF_&pid=Api&P=0&h=220",
      name: "Rugby",
    },
    {
      image:
        "https://tse2.mm.bing.net/th?id=OIP.bkxQ_oJfuISokjLjgBp4vQHaE8&pid=Api&P=0&h=220",
      name: "Badminton",
    },
    {
      image:
        "https://tse3.mm.bing.net/th?id=OIP.wffRoSEe_MS6mlu8L8cvGAHaFj&pid=Api&P=0&h=220",
      name: "Tennis",
    },
    {
      image:
        "https://tse2.mm.bing.net/th?id=OIP.M0GWNshcPkPE2ADqtRdsjQAAAA&pid=Api&P=0&h=220",
      name: "Baseball",
    },
  ];
  const handleCategory = (name: string) => {
    const newFilter = {
      ...currentFilter,
      category: name.toLowerCase(),
    };
    dispatch(changeFilterState(newFilter));
    navigate("/all-products");
  };
  return (
    <>
      <h3 className=" text-center mb-[30px] lg:text-2xl text-xl font-semibold">
        Explore Categories
      </h3>
      <div className=" grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
        {categories?.map((category, i) => (
          <div
            data-aos="fade-right"
            data-aos-duration="2000"
            key={i}
            className="relative group "
          >
            {/* Card container to ensure correct z-index stacking */}
            <div className="relative p-5   z-10">
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transform translate-y-full group-hover:translate-y-0 transition-all duration-500 flex items-center justify-center z-20">
                <button
                  onClick={() => handleCategory(category?.name)}
                  className="border flex gap-2 items-center border-white text-white  px-4 py-2 rounded"
                >
                  Explore <GoArrowRight />
                </button>
              </div>
              {/* Content */}
              <div className="relative">
                {/* image */}
                <div className="h-[200px] relative overflow-hidden">
                  <img
                    src={category?.image}
                    className="h-full w-full object-contain"
                    alt=""
                  />
                  {/* category */}
                  <p className="bg-black px-4 py-2 text-white absolute bottom-0 right-0">
                    {category?.name}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Categories;
