import React from "react";

import Input from "../../../../shared/components/FormElements/Input/Input";
import { useForm } from "../../../../shared/form-hook/form-hook";
import Button from "../../../../shared/components/FormElements/Button/Button";
import { Link } from "react-router-dom";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../../../shared/util/validators";
import Card from "../../../../shared/components/UIElements/Card/Card";
import "./SignUp.css";

/** TO DO: 
 * delete component eventually as the login component takes care of it
*/
const SignUp = () => {
  const signupSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs); /** send this to backend */
  };

  const [formState, inputHandler] = useForm(
    /** initial inputs param from useForm */
    {
      username: {
        value: "",
        isValid: false,
      },

      email: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
    },
    /** initial validity from useForm() */
    false
  );

  return (
    <form className="sign-up-form" onSubmit={signupSubmitHandler}>
      <Card className="sign-up-form-card">
          <h2>Sign Up</h2>
        <Input
          id="name"
          element="input"
          type="text"
          label="Name"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Name is required"
          onInput={inputHandler}
        />

        {/* to do: check that email does not already exist in the database */}
        <Input
          id="email"
          element="input"
          type="email"
          label="Email"
          validators={[VALIDATOR_EMAIL()]}
          errorText="The email you entered is not valid"
          onInput={inputHandler}
        />

        <Input
          id="password"
          element="input"
          type="text"
          label="Create Password"
          validators={[VALIDATOR_MINLENGTH(10)]}
          errorText="Password must be a minimum of 10 characters"
          onInput={inputHandler}
        />

       
          {/* redirects user to home page if they are logged in successfully */}
        <Link to="/signup">
        <Button className="sign-up-button" type="submit" 
          /** does not change to clickable when form state is valid */
          /** disabled={!formState.isValid} */
           >
            Sign up
          </Button></Link>
        <div className="log-in-button">
          {/* redirects user to home page if they are logged in successfully */}
          <Link to="/login">
            <Button type="submit">
              Log In
            </Button>
          </Link>
        </div>
      </Card>
    </form>
  );
};

export default SignUp;
