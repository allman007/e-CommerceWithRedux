import React from "react";
import SignIn from "../../components/sign-in/sign-in";
import SignUp from "../../components/sign-up/sign-up";

import "./signin-signup-page.styles.scss";

const SignInAndSignUpPage = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInAndSignUpPage;