import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import CartItem from "../cart-item/cart-item";
import CustomButton from "../custom-button/custom-button";
import "./cart-dropdown.styles.scss";

const CartDropdown = ({ cartItems, history, dispatch }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} items={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your Cart is empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          history.push("/checkout");
          dispatch(toggleCartHidden());
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

// const mapStateToProps = ({ cart: { cartItems } }) => ({
//   cartItems,
// }); //Before createStructuredSelector, from cart.selectors.js

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
}); // After cart.selectors.js

export default withRouter(connect(mapStateToProps)(CartDropdown));
