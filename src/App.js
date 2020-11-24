import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import "./App.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import CheckOutPage from "./pages/checkout/checkoutPage";
import HomePage from "./pages/homepage/HomePage";
import ShopPage from "./pages/shop/shop";
import SignInAndSignUpPage from "./pages/signin-signup-page/signin-signup-page";
import { setCurrentUser } from "./redux/user/user.action";
import { selectCurrentUser } from "./redux/user/user.selectors";

class App extends Component {
  // constructor() {
  //   super();

  //   this.state = {
  //     currentUser: null,
  //   };
  // } // Before redux

  unsubscribeFromAuth = null; // if d user is nt Auth

  componentDidMount() {
    const { setCurrentUser } = this.props;

    //Creating a new user
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          // this.setState({
          //   currentUser: {
          //     id: snapShot.id,
          //     ...snapShot.data(),
          //   },
          // });       //BEFORE Redux

          // console.log(this.state);

          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          }); //from user.action.js
        });
      }
      // this.setState({ currentUser: userAuth }); //if d user is nt login //Before redux
      setCurrentUser(userAuth); //if d user is nt login
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        {/* <Header currentUser={this.state.currentUser} /> Before redux */}
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckOutPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
        </Switch>
        <Footer />
      </div>
    );
  }
}

// const mapStateToProps = ({ user }) => ({
//   currentUser: user.currentUser, //Before createStructuredSelector,.. from user.reducer.js
// });

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser, // from user.selectors.js
});

// mapDispatchToProps to send all the user value to the component that needs it
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)), //from user.action.js, from headed.jsx
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

// when will dnt need mapStateToProps will set null
