import { RiDeleteBin6Line } from "react-icons/ri";
import { FiMinus } from "react-icons/fi";

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

const CartPage = () => {
  // cart products from redux store
  const cartProducts = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
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
  const vat = Number(((totalAmount * 15) / 100).toFixed(2))
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
        <div className=" space-y-5 text-gray-500 rounded-lg p-5">
          <p><span className="font-semibold text-gray-700">Total Price:</span> ${totalAmount}</p>
          <p><span  className="font-semibold text-gray-700">Total Items: </span> {cartProducts?.length}</p>
          <p><span  className="font-semibold text-gray-700">Total Vat: </span> ${vat}</p>
          <p><span  className="font-semibold text-gray-700">Total Amount: </span> ${totalAmount + vat}</p>
          <div className=" flex gap-5 ">
            <button onClick={handleCancelOrder} className="bg-black rounded-lg text-white px-4 py-2 flex gap-2 items-center">Cancel order</button>
            <button className="bg-black rounded-lg text-white px-4 py-2 flex gap-2 items-center">Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
