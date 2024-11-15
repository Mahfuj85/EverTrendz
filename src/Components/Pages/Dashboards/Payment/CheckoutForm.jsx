import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";

const CheckoutForm = ({ booking }) => {
  const [cardError, setCardError] = useState("");
  const [success, setSuccess] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [clientSecret, setClientSecret] = useState("");

  const stripe = useStripe();
  const elements = useElements();
  const { price, email, _id } = booking;

  useEffect(() => {
    fetch("http://localhost:7000/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [price]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log(error);
      setCardError(error.message);
    } else {
      setCardError("");
    }

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name,
            email,
          },
        },
      });

    if (confirmError) {
      setCardError(confirmError.message);
      return;
    }
    //console.log(paymentIntent);

    if (paymentIntent.status === "succeeded") {
      const payment = {
        price,
        transactionId: paymentIntent.id,
        email,
        bookingId: _id,
      };
      fetch("http://localhost:7000/payments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            setSuccess("Congratulation! Your payment is successful");
            setTransactionId(paymentIntent.id);
          }
        });
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="w-[500px] mt-10 mb-5">
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          type="submit"
          disabled={!stripe || !clientSecret}
          className="btn btn-primary bg-gradient-to-l from-cyan-500 to-cyan-600 text-white uppercase px-8 mt-5 text-lg"
        >
          Pay
        </button>
      </form>
      <p className="text-red-500 font-semibold">{cardError}</p>

      {success && (
        <div>
          <p className="text-green-500 font-semibold text-lg">{success}</p>
          <p>
            <b>{transactionId}</b>
          </p>
        </div>
      )}
    </>
  );
};

export default CheckoutForm;
