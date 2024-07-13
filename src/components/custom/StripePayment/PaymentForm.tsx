import { CardElement } from "@stripe/react-stripe-js";

const PaymentForm = ({
  paymentInfo,
}: {
  paymentInfo: { totalAmount: number };
}) => {
    console.log(paymentInfo);
  return (
    <div>
      <form
        // onSubmit={}
        className="w-[70vw] 2xl:text-2xl  mx-auto px-[20%]"
      >
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "19px",
                color: "#424770",

                "::placeholder": {
                  color: "black",
                },
              },
              invalid: {
                color: "black",
              },
            },
          }}
        />

        <button
          className=" px-4 rounded-lg drop-shadow-xl flex gap-2 items-center shadow-xl py-2 bg-gradient-to-r from-rose-500 to-rose-600 text-white cursor-pointer font-medium  text-base mt-[5%]   w-max mx-auto  hover:bg-[rgb(178,63,76)] "
          type="submit"
        //   disabled={!stripe || !clientSecret}
        >
          Payment
        </button>
        {/* <p className="text-red-500 text-base mt-5">{error}</p> */}
        {/* {transactionId && (
          <div>
            <p className="text-gray-800 w-[70%] text-base px-5 py-3 drop-shadow-xl shadow-xl mt-5 flex items-center  mx-auto">
              <GiConfirmed className="text-green-500 mr-3 " /> You have
              successfully paid for your contact request.
            </p>
            <p className="text-gray-800 w-[70%] text-base px-5 py-3 drop-shadow-xl shadow-xl mt-5 flex items-center  mx-auto">
              <GiConfirmed className="text-green-500 mr-3 " /> Your transaction
              id is : {transactionId}
            </p>
          </div>
        )} */}
      </form>
    </div>
  );
};

export default PaymentForm;
