import React from "react";
import Input from "../../../shared/components/FormElements/Input/Input";
import { useForm } from "../../../shared/hooks/form-hook/form-hook";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
} from "../../../shared/util/validators";
import Button from "../../../shared/components/FormElements/Button/Button";
import "./Authentic.css";

/** add a form with useForm() hook that:
 * renders an email and password form
 * add validation to the fields (find in validators.js)
 * password: VALIDATOR_MIN
 * email: VALIDATOR_EMAIL
 */
const Authenticate = (props) => {
  const [formState, inputHandler] = useForm(
    /** initial inputs param from useForm */
    {
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

  const loginSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs); /** send this to backend */
  };

  return (
    <form className="authentication-form" onSubmit={loginSubmitHandler}>
      <h2>Log in</h2>
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
        label="Password"
        validators={[VALIDATOR_MINLENGTH(10)]}
        errorText="Password must be a minimum of 5 characters"
        onInput={inputHandler}
      />

      <div className="login-button">
        {/* redirects user to home page if they are logged in successfully */}
        <Button type="submit" disabled={!formState.isValid}>
          Submit
        </Button>
      </div>
    </form>
  );
};

export default Authenticate;
