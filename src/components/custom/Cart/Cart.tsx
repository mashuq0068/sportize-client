import { RiDeleteBin6Line } from "react-icons/ri";
import { FiMinus } from "react-icons/fi";
import { PiMoney } from "react-icons/pi";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  decreaseQuantity,
  ICartProduct,
  increaseQuantity,
  removeAllProducts,
  removeProduct,
} from "@/redux/features/cart/cart.slice";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { LuPlus } from "react-icons/lu";
import { useEffect, useState } from "react";
import { useCheckStockDetailsMutation } from "@/redux/features/products/products.api";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const Cart = () => {
  // cart products from redux store
  const cartProducts = useAppSelector((state) => state.cart);
  const [checkStock] = useCheckStockDetailsMutation();
  const dispatch = useAppDispatch();
  const [overStockProducts, setOverStockProducts] = useState([]);

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
  useEffect(() => {
    if (cartProducts.length > 0) {
      checkStockAndUpdate(cartProducts);
    }
  }, [cartProducts]);

  //   delete product
  const handleDeleteProductFromCart = (key: number) => {
    dispatch(removeProduct(key));
  };
  //   increase quantity
  const handleIncreaseQuantity = (key: number) => {
    dispatch(increaseQuantity(key));
  };
  //   decrease quantity
  const handleDecreaseQuantity = (key: number) => {
    if (cartProducts[key]?.quantity === 1) {
      return dispatch(removeProduct(key));
    }
    dispatch(decreaseQuantity(key));
  };
  //   cancel order
  const handleCancelOrder = () => {
    dispatch(removeAllProducts());
  };

  //   total price of cart products
  const totalAmount = cartProducts.reduce(
    (accumulator, product) => accumulator + product?.price * product?.quantity,
    0
  );

  const vat = Number(((totalAmount * 15) / 100).toFixed(2));
  if (cartProducts?.length === 0) {
    return (
      <div className="my-16 text-center text-gray-500 text-xl">
        No Product Added to Cart
      </div>
    );
  }
  return (
    <div className="min-h-[60vh] mt-[30px] flex lg:flex-row flex-col gap-12 lg:w-max mx-auto">
      {/* cart */}

      <div>
        {cartProducts?.length > 0 && (
          <Table className=" md:max-w-[600px] mx-auto">
            <TableHeader>
              <TableRow>
                <TableHead>No</TableHead>
                <TableHead>Product</TableHead>
                <TableHead>Price(Per)</TableHead>
                <TableHead>Quantity</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {cartProducts?.map((product: ICartProduct, i: number) => (
                <TableRow key={product?._id}>
                  <TableCell className="font-medium">{i + 1}</TableCell>
                  <TableCell>{product?.name}</TableCell>
                  <TableCell>{product?.price}</TableCell>
                  <TableCell>{product?.quantity}</TableCell>
                  <TableCell className="lg:block flex justify-center items-center space-x-6">
                    <button onClick={() => handleIncreaseQuantity(i)}>
                      <LuPlus className="text-xl" />
                    </button>
                    <button onClick={() => handleDecreaseQuantity(i)}>
                      <FiMinus className="text-xl" />
                    </button>
                    <button onClick={() => handleDeleteProductFromCart(i)}>
                      <RiDeleteBin6Line className="text-xl" />{" "}
                    </button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </div>
      {cartProducts?.length > 0 && (
        <div className=" space-y-8 text-gray-500 rounded-lg p-5">
          <p className="flex gap-2 items-center">
            <span className="font-semibold text-gray-700">Total Price:</span>
            <span className="bg-slate-800 px-4 rounded-md py-1 w-max text-white">
              ${totalAmount}
            </span>
          </p>
          <p className="flex gap-2 items-center">
            <span className="font-semibold text-gray-700">Total Items: </span>{" "}
            <span className="">{cartProducts?.length}</span>
          </p>
          <p className="flex gap-2 items-center">
            <span className="font-semibold text-gray-700">Total Vat: </span>
            <span className="bg-yellow-300 px-4 rounded-md py-1 w-max text-black">
              ${vat}
            </span>
          </p>
          <p className="flex gap-2 items-center">
            <span className="font-semibold text-gray-700">Total Amount: </span>{" "}
            <span className="bg-green-300 px-4 rounded-md py-1 w-max text-black">
              ${totalAmount + vat}
            </span>
          </p>
          <div className=" flex gap-5 ">
            <button
              onClick={handleCancelOrder}
              className="bg-black rounded-lg text-white px-4 py-2 flex gap-2 items-center"
            >
              Cancel order
            </button>
            {overStockProducts?.length > 0 ? (
              <button
                disabled
                className="bg-slate-300 rounded-lg  text-white px-4 py-2 flex gap-2 items-center"
              >
                Proceed to checkout <PiMoney className="text-xl" />
              </button>
            ) : (
              <Link
                to="/checkout"
                className="bg-black rounded-lg  text-white px-4 py-2 flex gap-2 items-center"
              >
                Proceed to checkout <PiMoney className="text-xl" />
              </Link>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
