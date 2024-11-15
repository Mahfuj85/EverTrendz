import React from "react";
import { useLoaderData } from "react-router-dom";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from './CheckoutForm';

//const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
const stripePromise = loadStripe(
  "pk_test_51QE63pKF7D2bD7Sw1AnDbzwAIsaQwBEaY8vmb6BwkGC8ydfNJ1WYHwaU4YN0mrpJ0oWQARlRoQ8dwFXDWqdMUCAS00g2GT6DaQ"
);

//console.log(stripePromise);

const Payment = () => {
  const booking = useLoaderData();
  //console.log(booking);
  const { title, price } = booking;
  return (
    <div>
      <h2 className="text-2xl font-bold">
        Payment for <span className="text-emerald-400">{title}</span>
      </h2>
      <p className="mt-2 text-lg">
        Please pay
        <b className="text-primary"> Tk {price} </b>
      </p>
      <div>
        <Elements stripe={stripePromise}>
          <CheckoutForm booking={booking} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
