/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm, SubmitHandler } from "react-hook-form";
// import {
//   Select,
//   SelectContent,
//   SelectGroup,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// 
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useCheckoutProductsMutation } from "@/redux/features/products/products.api";
import toast from "react-hot-toast";
import { removeAllProducts } from "@/redux/features/cart/cart.slice";

interface FormData {
  name: string;
  email: string;
  phoneNumber: number;
  deliveryAddress: string;
}

const Checkout = () => {
  //   const [paymentOption, setPaymentOption] = useState("");
  //   const [paymentOptionError, setPaymentOptionError] = useState("");
  const dispatch = useAppDispatch();
  const checkoutProducts = useAppSelector((state) => state.cart);
  const [checkout] = useCheckoutProductsMutation();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const showToast = () => {
    toast.success(
      "Congratulations! Your checkout is successful. You will get your delivery in 48 hours",
      {
        duration: 5000,
        className: "text-center  flex flex-col w-[300px]  z-50",
      }
    );
  };

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    // if (!paymentOption) {
    //   setPaymentOptionError("Choose your payment option.");
    // }
    if (data) {
      const checkoutData = {
        ...data,
        checkoutProducts,
      };
      const res = await checkout(checkoutData);
      if (res?.data?.data) {
        navigate("/");
        showToast();
        dispatch(removeAllProducts());
      }
    }
  };

  return (
    <div className="flex items-center justify-center p-12">
      {/*dark overlay for toast */}
      {/* <Overlay show={showOverlay} /> */}
      <div className="mx-auto w-full max-w-[550px]">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* name */}
          <div className="mb-5">
            <label className="mb-3 block text-base font-medium text-[#07074D]">
              Name
            </label>
            <input
              {...register("name", { required: "Your name is required" })}
              type="text"
              placeholder="Enter Your Name"
              className={`w-full rounded-md border ${
                errors.name ? "border-red-500" : "border-[#e0e0e0]"
              } bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-black focus:shadow-md`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>
          {/* email */}
          <div className="mb-5">
            <label className="mb-3 block text-base font-medium text-[#07074D]">
              Email
            </label>
            <input
              {...register("email", { required: "Your email is required" })}
              type="email"
              placeholder="Enter Your Name"
              className={`w-full rounded-md border ${
                errors.email ? "border-red-500" : "border-[#e0e0e0]"
              } bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-black focus:shadow-md`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>
          {/* Phone number */}
          <div className="mb-5">
            <label className="mb-3 block text-base font-medium text-[#07074D]">
              Phone Number
            </label>
            <input
              {...register("phoneNumber", {
                required: "Your phone number is required",
              })}
              type="number"
              placeholder="Enter Your Phone Number"
              className={`w-full rounded-md border ${
                errors.phoneNumber ? "border-red-500" : "border-[#e0e0e0]"
              } bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-black focus:shadow-md`}
            />
            {errors.phoneNumber && (
              <p className="text-red-500 text-sm mt-1">
                {errors.phoneNumber.message}
              </p>
            )}
          </div>
          {/* delivery address */}
          <div className="mb-5">
            <label className="mb-3 block text-base font-medium text-[#07074D]">
              Delivery Address
            </label>
            <input
              {...register("deliveryAddress", {
                required: "Your delivery address is required",
              })}
              type="text"
              placeholder="Enter Your Delivery Address"
              className={`w-full rounded-md border ${
                errors.deliveryAddress ? "border-red-500" : "border-[#e0e0e0]"
              } bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-black focus:shadow-md`}
            />
            {errors.deliveryAddress && (
              <p className="text-red-500 text-sm mt-1">
                {errors.deliveryAddress.message}
              </p>
            )}
          </div>

          {/* payment option */}
          {/* <div className="mb-5">
            <label className="mb-3 block text-base font-medium text-[#07074D]">
              Payment Option
            </label>
            <Select value={paymentOption} onValueChange={setPaymentOption}>
              <SelectTrigger className="outline-none text-[#6B7280] text-base">
                <SelectValue
                  className="text-[#6B7280]"
                  placeholder="Select a payment option"
                />
              </SelectTrigger>
              <SelectContent className="">
                <SelectGroup>
                  <SelectItem value="cashOnDelivery">
                    Cash on Delivery
                  </SelectItem>
                  <SelectItem value="stripe">Stripe</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            {paymentOptionError && !paymentOption && (
              <p className="text-red-500 text-sm mt-1">{paymentOptionError}</p>
            )}
          </div> */}

          <div>
            <button
              type="submit"
              className="hover:shadow-form rounded-md bg-black py-3 px-8 text-base font-medium text-white outline-none"
            >
              Checkout Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
