/* eslint-disable no-unsafe-optional-chaining */
import { BsCart3 } from "react-icons/bs";
import Rating from "react-rating";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

import { useParams } from "react-router-dom";
import {
  useCheckStockDetailsMutation,
  useGetSingleProductQuery,
} from "@/redux/features/products/products.api";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import toast from "react-hot-toast";
import {
  addProduct,
  ICartProduct,
  increaseQuantityById,
} from "@/redux/features/cart/cart.slice";
import { useEffect, useState } from "react";

const SingleProduct = () => {
  const cartProducts = useAppSelector((state) => state.cart);
  const [checkStock] = useCheckStockDetailsMutation();
  const dispatch = useAppDispatch();
  const [overStockProducts, setOverStockProducts] = useState([]);
  const params = useParams();
  const id = params?.id;
  const { data, isLoading, isFetching } = useGetSingleProductQuery(id);
  // check stock function
  const checkStockAndUpdate = async (products: ICartProduct[]) => {
    const res = await checkStock(products);
    if (res) {
      const data = res?.data?.data;
      setOverStockProducts(data);
      if (data?.length > 0) {
        toast.error(
          `${data[0]?.name} is available only ${data[0]?.stockQuantity} in the stock`
        );
      }
    }
  };

  // check stock after every increase
  useEffect(() => {
    if (cartProducts.length > 0) {
      checkStockAndUpdate(cartProducts);
    }
  }, [cartProducts]);
  // loading
  if (!data || isLoading || isFetching) {
    return (
      <span className="loading relative left-[50%] loading-spinner loading-lg text-center my-16"></span>
    );
  }

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
  } = data?.data;
  const handleAddToCart = async () => {
    // is product already added in cart
    const cartData = {
      _id,
      name,
      price,
      quantity: 1,
    };
    const isProductAlreadyExist = cartProducts.find(
      (product) => product?._id === cartData?._id
    );
    if (isProductAlreadyExist) {
      return dispatch(increaseQuantityById(_id));
    }

    dispatch(addProduct(cartData));
    toast.success("Product Added to cart");
  };

  return (
    <div style={{}} className="">
      {/* details */}
      <div className=" flex lg:flex-row flex-col lg:gap-12 justify-between">
        {/* left */}
        <div className="lg:w-[60%] ">
          <div className="lg:mt-36 mt-[30px] mb-12 max-w-[200px] rounded-lg max-h-[200px] overflow-hidden">
            <PhotoProvider>
              <PhotoView src={image}>
                <img
                  className=" cursor-pointer max-h-[400px]"
                  src={image}
                  alt=""
                />
              </PhotoView>
            </PhotoProvider>
          </div>
          <div>{description}</div>
        </div>
        {/* right */}
        <div className="text-lg  flex-1 mt-[30px] lg:mt-[100px] lg:h-max pt-[2%]   px-[2%]  space-y-3  rounded-xl   ">
          <p className="spacing flex items-center gap-2 capitalize text-gray-600">
            <span className="lg:font-medium  text-black">Name</span> : {name}
          </p>
          <p className="spacing flex items-center gap-2 capitalize text-gray-600 ">
            <span className="lg:font-medium  text-black">Category</span> :
            {category}
          </p>
          <p className="spacing flex items-center gap-2 capitalize text-gray-600 ">
            <span className="lg:font-medium  text-black">Price</span> : ${price}
          </p>

          <p className="spacing flex items-center gap-2 capitalize text-gray-600">
            <span className="lg:font-medium  text-black">Brand</span>:{brand}
          </p>
          <div className="spacing flex items-center gap-2 capitalize text-gray-600">
            <span className="lg:font-medium  text-black">Stock</span>:
            <div className="bg-slate-800 rounded-md px-2 py-1 w-max text-white">
              <p>{stockQuantity} Available</p>
            </div>
          </div>

          <div className="spacing flex items-center gap-2 text-gray-600">
            <span className="lg:font-medium  text-black">Rating</span>:
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
              <p className=" text-gray-700">{rating}</p>
          </div>
          {overStockProducts?.length > 0 ? (
            <button
              disabled
              className=" bg-slate-300 w-full justify-center rounded-lg  text-white px-6 py-2 flex items-center gap-2 "
            >
              Add to cart <BsCart3 className="text-xl" />
            </button>
          ) : (
            <button
              onClick={handleAddToCart}
              className=" bg-black w-full justify-center rounded-lg  text-white px-6 py-2 flex items-center gap-2 "
            >
              Add to cart <BsCart3 className="text-xl" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
