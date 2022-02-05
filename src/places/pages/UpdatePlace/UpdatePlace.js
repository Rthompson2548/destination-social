import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./UpdatePlace.css";
import Card from "../../../shared/components/UIElements/Card/Card";
import Input from "../../../shared/components/FormElements/Input/Input";
import Button from "../../../shared/components/FormElements/Button/Button";
import { useForm } from "../../../shared/form-hook/form-hook";
/** just need the validators that require a value and require a minimum length of that value */
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../../../shared/util/validators";

/* will be removed once i have implemented a server */

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire State Building",
    description: "Tall building in New York",
    address: "1234 SE Empire St.",
    imageUrl:
      "https://images.unsplash.com/photo-1617688319108-cb3bdc88f587?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80",
    location: {
      lat: 40.748,
      lng: -73.985,
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Chicago Bean",
    description: "Large metallic bean statue in Chicago",
    address: "5678 SE Bean St.",
    imageUrl:
      "https://images.unsplash.com/photo-1494522855154-9297ac14b55f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    location: {
      lat: 41.883,
      lng: -87.623,
    },
    creator: "u2",
  },
  {
    id: "p3",
    title: "Yellowstone National Park",
    description: "National Park in the United States",
    address: "1234 SE Yellowstone St.",
    imageUrl:
      "https://media.istockphoto.com/photos/grand-prismatic-geyser-from-above-picture-id186131562?k=20&m=186131562&s=612x612&w=0&h=Let6gNB8aXB_ZNT7Ips9jirSto6vYSA8uVjcr5ZOREc=",
    location: {
      lat: 44.463,
      lng: -110.594,
    },
    creator: "u3",
  },

  {
    id: "p4",
    title: "Disneyland",
    description: "Large Amusement park in California",
    address: "5678 SE Disney St.",
    imageUrl:
      "https://media.istockphoto.com/photos/amusement-reflections-picture-id891853944?k=20&m=891853944&s=612x612&w=0&h=_cBwdXdZpqiR1gu8R_uIXtBSHGQPTdvLNugg2apYiBA=",
    location: {
      lat: 33.813,
      lng: -117.919,
    },
    creator: "u4",
  },
];

const UpdatePlace = () => {
  const [isLoading, setIsLoading] = useState(true);

  /* `.placeId` => used as path param in App component Route */
  const placeId = useParams().placeId;



  const [formState, inputHandler, setFormData] = useForm(
    {
      title: {
        value: "",
        isValid: false,
      },
      description: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const placeToUpdate = DUMMY_PLACES.find((place) => {
    return place.id === placeId;
  });

  useEffect(() => {
    if (placeToUpdate) {
      setFormData(
        {
          title: {
            value: placeToUpdate.title,
            isValid: true,
          },
          description: {
            value: placeToUpdate.description,
            isValid: true,
          },
        },
        true
      );
    }
    /* removes loading message once form data has been set after an input value change */
    setIsLoading(false);
    /* only sets the form data when the place changes */
  }, [setFormData, placeToUpdate]);

  if (!placeToUpdate) {
    return (
      <Card>
        <h2>Could not find place</h2>
      </Card>
    );
  }

  const placeUpdateSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs);
  };

  /* temporary workaround until we connect the database */
  if (isLoading) {
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <form className="update-place" onSubmit={placeUpdateSubmitHandler}>
      {/* title */}
      <Input
        id="title"
        type="text"
        element="input"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title"
        /** to do => implement the below attributes */
        onInput={inputHandler}
        initialValue={formState.inputs.title.value}
        initialValid={formState.inputs.title.isValid}
      />
      {/* description */}
      <Input
        id="description"
        type="text"
        element="input"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid description"
        /** to do => implement the below attributes */
        onInput={inputHandler}
        initialValue={formState.inputs.description.value}
        initialValid={formState.inputs.description.isValid}
      />
      {/* submit button */}

      <Button type="submit" to="" disabled={!formState.isValid}>
        Update place
      </Button>
    </form>
  );
};

export default UpdatePlace;
