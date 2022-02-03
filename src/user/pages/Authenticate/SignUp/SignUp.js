import React from "react";
import Input from "../../../../shared/components/FormElements/Input/Input";
import { useForm } from "../../../../shared/hooks/form-hook/form-hook";
import Button from "../../../../shared/components/FormElements/Button/Button";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../../../shared/util/validators";
import Card from "../../../../shared/components/UIElements/Card/Card";
import "./SignUp.css";

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

      <Card className="sign-up-form-card">
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
          errorText="Password must be a minimum of 5 characters"
          onInput={inputHandler}
        />

        <div className="sign-up-button">
          {/* redirects user to home page if they are logged in successfully */}
          <Button type="submit" disabled={!formState.isValid}>
            Sign up
          </Button>
        </div>
      </Card>
    </form>
  );
};

export default SignUp;
