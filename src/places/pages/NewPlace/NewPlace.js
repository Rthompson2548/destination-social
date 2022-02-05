/* useReducer() => similar to useState() but is more suited for 
managing state objects that contain multiple sub-values */
import React from "react";

import Button from "../../../shared/components/FormElements/Button/Button";
import Input from "../../../shared/components/FormElements/Input/Input";
import { useForm } from "../../../shared/form-hook/form-hook";

import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../../shared/util/validators";
import "./NewPlace.css";

const NewPlace = () => {
  const [formState, inputHandler] = useForm(
    {
      title: {
        value: "",
        isValid: false,
      },
      description: {
        value: "",
        isValid: false,
      },
      address: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const placeSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs); /* send this to the backend */
  };

  return (
    <form className="new-place" onSubmit={placeSubmitHandler}>
      {/* for title input */}
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid description with at least 5 characters"
        onInput={inputHandler}
      />
      {/* for description textarea */}
      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid title"
        onInput={inputHandler}
      />

      {/* address */}
      <Input
        id="address"
        element="input"
        type="text"
        label="Address"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a address"
        onInput={inputHandler}
      />
      {/* submit button */}
      <div className="add-place-button">
        <Button type="submit" disabled={!formState.isValid}>
          Add place
        </Button>
      </div>
    </form>
  );
};

export default NewPlace;
