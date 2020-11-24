import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import "./cart-icon.stlyes.scss";

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);

const mapDispatcheToProps = (disatch) => ({
  toggleCartHidden: () => disatch(toggleCartHidden()),
});

// const mapStateToProps = ({ cart: { cartItems } }) => ({
//   itemCount: cartItems.reduce(
//     (accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity,
//     0
//   ),
// }); // Before createStructuredSelector, form cart.selectors.js

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
}); //After cart.selectors.js

export default connect(mapStateToProps, mapDispatcheToProps)(CartIcon);
