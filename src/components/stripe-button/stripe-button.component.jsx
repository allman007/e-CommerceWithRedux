import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51HY9TnDmIlwirq0L4zjWJ0MaZBQb2h7bOPHOv9cz849r1uZpX1MjXXeR3Qqn0gtoNidQJALeXgALoXfiFXDuQLIe00VdlwvVDw";

  const onToken = (token) => {
    alert(`Payment Successful`);
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="THE STORE."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
