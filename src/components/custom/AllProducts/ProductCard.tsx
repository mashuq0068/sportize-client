
import { GoArrowRight } from "react-icons/go";
import Rating from "react-rating";
import { Link } from "react-router-dom";
import 'aos/dist/aos.css'; 

export interface IProduct {
  _id: string;
  name: string;
  category: string;
  brand: string;
  price: number;
  rating: number;
  stockQuantity: number;
  image: string;
  description: string;
}
interface ProductProps {
  product: IProduct;
}
const ProductCard = ({ product }: ProductProps) => {
  const {
    _id,
    name,
    brand,
    price,
    category,
    rating,
    stockQuantity,
    image,
    description,
  } = product;

 
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="2000"
      className="relative group "
    >
      {/* Card container to ensure correct z-index stacking */}
      <div className="relative p-5   z-10">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transform translate-y-full group-hover:translate-y-0 transition-all duration-500 flex items-center justify-center z-20">
          {
            <Link
              to={`/single-product/${_id}`}
              className="border flex gap-2 items-center border-white text-white  px-4 py-2 rounded"
            >
              View Details <GoArrowRight />
            </Link>
          }
        </div>
        {/* Content */}
        <div className="relative">
          {/* image */}
          <div className="h-[200px] relative overflow-hidden">
            <img src={image} className="h-full w-full object-contain" alt="" />
            {/* category */}
            <p className="bg-yellow-200 px-2 py-1 text-black absolute bottom-0 right-0">
              {category}
            </p>
          </div>
          {/* =name  */}
          <div className="flex mt-2 mb-2 justify-between">
            <p>{name}</p>
          </div>
          {/* des */}
          <div className="mb-2">
            <p>{description?.slice(0, 69)}</p>
          </div>
          {/* rating */}
          <div className="mb-2">
            {/* @ts-expect-error there is a version miss-match in the source */}
            <Rating
              initialRating={rating}
              readonly
              emptySymbol={
                <svg
                  stroke="currentColor"
                  fill="#FFD700"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill="none" d="M0 0h24v24H0V0z"></path>
                  <path d="m22 9.24-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"></path>
                </svg>
              }
              fullSymbol={
                <svg
                  stroke="yellow"
                  fill="#FFD700"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M394 480a16 16 0 0 1-9.39-3L256 383.76 127.39 477a16 16 0 0 1-24.55-18.08L153 310.35 23 221.2a16 16 0 0 1 9-29.2h160.38l48.4-148.95a16 16 0 0 1 30.44 0l48.4 149H480a16 16 0 0 1 9.05 29.2L359 310.35l50.13 148.53A16 16 0 0 1 394 480z"></path>
                </svg>
              }
            />
          </div>
          {/* available */}
          <div className="bg-slate-800 px-2 py-1 w-max text-white">
            <p>{stockQuantity} Available</p>
          </div>
          {/* price */}
          <div className="bg-black px-2 py-1 text-white absolute top-0 w-max">
            <p>${price}</p>
          </div>
          {/* brand */}
          <div className="bg-slate-400 px-2 py-1 text-white absolute bottom-0 right-0 w-max">
            <p>{brand}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
