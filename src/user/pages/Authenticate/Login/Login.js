import React from "react";
import Input from "../../../../shared/components/FormElements/Input/Input";
import { useForm } from "../../../../shared/hooks/form-hook/form-hook";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
} from "../../../../shared/util/validators";
import Button from "../../../../shared/components/FormElements/Button/Button";
import "./Login.css";
import { Link } from "react-router-dom";
import Card from "../../../../shared/components/UIElements/Card/Card";
// import { useParams } from "react-router-dom/cjs/react-router-dom.min";

/**
 * to do:
 * need to create a validator that checks through email addresses of all users
 * and will return a Card that displays the following:
 * "No accounts match this email address. Create an account"
 * another signup button that redirects user to the signup page
 */

const USERS = [
  {
    id: "u1",
    image:
      "https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1589&q=80",
    name: "Reilly",
    places: 10,
    email: "reilly@email.com",
  },
  {
    id: "u2",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80",
    name: "Maggie",
    places: 1,
    email: "maggie@email.com",
  },
  {
    id: "u3",
    image:
      "https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1589&q=80",
    name: "Bailey",
    places: 4,
    email: "bailey@email.com",
  },
  {
    id: "u4",
    image:
      "https://images.unsplash.com/photo-1541647376583-8934aaf3448a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80",
    name: "Dakota",
    places: 2,
    email: "dakota@email.com",
  },
];

const Login = () => {
  // const userEmail = useParams().userEmail;

  // const existingEmail = USERS.find((user) => {
  //   return user.email === userEmail;
  // });

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
    <form className="log-in-form" onSubmit={loginSubmitHandler}>
      <h2>Log in</h2>
      <Card className="log-in-form-card">
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

        <div className="log-in-button">
          {/* redirects user to home page if they are logged in successfully */}
          <Button type="submit" disabled={!formState.isValid}>
            Log in
          </Button>
        </div>

        <div className="create-account">
          {/* redirects user to home page if they are logged in successfully */}

          <Card className="sign-up-card">
            <p className="new-user">New here? </p>
            <Link className="sign-up-create-account" to="/signup">Create account</Link>
          </Card>
        </div>
      </Card>
    </form>
  );
};

export default Login;
