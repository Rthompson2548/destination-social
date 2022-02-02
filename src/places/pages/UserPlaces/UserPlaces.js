import React from "react";
import { useParams } from "react-router-dom";

import PlaceList from "../../components/PlaceList/PlaceList";
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
const UserPlaces = () => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter((place) => place.creator === userId);

  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
