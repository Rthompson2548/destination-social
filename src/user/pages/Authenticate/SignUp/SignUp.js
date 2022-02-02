import React from "react";
import Input from "../../../../shared/components/FormElements/Input/Input";
import { useForm } from "../../../../shared/hooks/form-hook/form-hook";
import Button from "../../../../shared/components/FormElements/Button/Button";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
} from "../../../../shared/util/validators";

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
      <h2>Sign Up</h2>

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

      {/* to do: check that username does not already exist in the database */}
      <Input
        id="username"
        element="input"
        type="text"
        label="Create Username"
        validators={[VALIDATOR_MINLENGTH(10)]}
        errorText="Username must be a minimum of 10 characters"
        onInput={inputHandler}
      />

      <Input
        id="password"
        element="input"
        type="text"
        label="Create Password"
        validators={[VALIDATOR_MINLENGTH(10)]}
        errorText="Password must be a minimum of 5 characters"
        onInput={inputHandler}
      />

      <div className="sign-up-button">
        {/* redirects user to home page if they are logged in successfully */}
        <Button type="submit" disabled={!formState.isValid}>
          Sign up
        </Button>
      </div>
    </form>
  );
};

export default SignUp;
