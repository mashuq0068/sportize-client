import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,

} from "@stripe/react-stripe-js";
import PaymentForm from "./PaymentForm";
import { useAppSelector } from "@/redux/hooks";
import { useCreatePaymentIntentMutation } from "@/redux/features/stripePayment/stripePayment.api";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_KEY);

const StripePayment: React.FC = () => {
  const cartProducts = useAppSelector((state) => state.cart);
  const [createPaymentIntent] = useCreatePaymentIntentMutation();
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const totalAmount = cartProducts.reduce(
    (accumulator, product) => accumulator + product.price * product.quantity,
    0
  );

  const paymentInfo = {
    totalAmount,
  };

  const createStripePaymentIntent = async () => {
    const res = await createPaymentIntent(paymentInfo);
    if (res?.data?.data) {
      setClientSecret(res.data.data.clientSecret);
    }
  };

  useEffect(() => {
    createStripePaymentIntent();
  }, []);

  return (
    <>
      {clientSecret && (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <PaymentForm paymentInfo={paymentInfo} />
        </Elements>
      )}
    </>
  );
};

export default StripePayment;
