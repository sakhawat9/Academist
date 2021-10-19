import {
  CardElement,
  useStripe,
  useElements,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
} from "@stripe/react-stripe-js";
import React, { useMemo } from "react";
import { useState, useContext } from "react";
import { Store } from "utils/Store";
import Cookies from "js-cookie";

const useOptions = () => {
  const options = useMemo(() => ({
    style: {
      base: {
        color: "gray",
        "::placeholder": {
          color: "#aab7c4",
        },
      },
      invalid: {
        color: "#9e2146",
      },
    },
  }));

  return options;
};

const SimpleCardForm = ({ handlePayment, err }) => {
  console.log("err", err.message);
  const [paymentError, setPaymentError] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(null);
  const { state, dispatch } = useContext(Store);
  // const {
  //   cart: { cartItems },
  //   userInfo,
  //   billingAddress,
  //   paymentInfo,
  // } = state;

  const stripe = useStripe();
  const elements = useElements();
  const options = useOptions();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardNumberElement),
    });
    console.log("paymentMethod", paymentMethod);

    if (error) {
      setPaymentError(error.message);
      setPaymentSuccess(null);
    } else {
      setPaymentSuccess(paymentMethod.card);
      setPaymentError(null);
      handlePayment(paymentMethod.card);
    }
  };

  return (
    <div className="container mt-5 ">
      <form onSubmit={handleSubmit} className="lg:w-8/12">
        <label>
          Card number
          <CardNumberElement
            options={options}
            className="py-2"
            onChange={(event) => {
              console.log("CardNumberElement [change]", event);
            }}
          />
        </label>
        <label>
          Expiration date
          <CardExpiryElement
            options={options}
            className="py-2"
            onChange={(event) => {
              console.log("CardNumberElement [change]", event);
            }}
          />
        </label>
        <label>
          CVC
          <CardCvcElement
            options={options}
            className="py-2"
            onChange={(event) => {
              console.log("CardNumberElement [change]", event);
            }}
          />
        </label>
        <button
          className="flex px-6 py-2 my-6 text-lg text-white bg-indigo-600 border-0 rounded cursor-pointer focus:outline-none hover:bg-aquamarine-800"
          type="submit"
          disabled={!stripe}
        >
          Confirm Payment
        </button>
      </form>
      {paymentError && <p style={{ color: "red" }}>{paymentError}</p>}
      {/* <p style={{ color: "red" }}>{err.message}</p> */}
      {err && <p style={{ color: "red" }}>{err.message}</p>}
    </div>
  );
};

export default SimpleCardForm;
