import React from "react";
import { GET_SERVICES } from "../types";
import {
  FaCocktail,
  FaBacon,
  FaHiking,
  FaSwimmer,
  FaBeer,
  FaCar,
} from "react-icons/fa";
const init_state = [
  {
    id: 1,
    iconType: <FaCocktail />,
    title: "lorem ipsum",
    text: "This is a service we offer. Look at this as lorem ipsum",
  },
  {
    id: 1,
    iconType: <FaBacon />,
    title: "lorem ipsum",
    text: "This is a service we offer. Look at this as lorem ipsum",
  },
  {
    id: 1,
    iconType: <FaHiking />,
    title: "lorem ipsum",
    text: "This is a service we offer. Look at this as lorem ipsum",
  },
  {
    id: 1,
    iconType: <FaSwimmer />,
    title: "lorem ipsum",
    text: "This is a service we offer. Look at this as lorem ipsum",
  },
  {
    id: 1,
    iconType: <FaCar />,
    title: "lorem ipsum",
    text: "This is a service we offer. Look at this as lorem ipsum",
  },
  {
    id: 1,
    iconType: <FaBeer />,
    title: "lorem ipsum",
    text: "This is a service we offer. Look at this as lorem ipsum",
  },
];

const servicesReducer = (state = init_state, action) => {
  switch (action.type) {
    case GET_SERVICES:
      return [...state];
    default:
      return state;
  }
};

export default servicesReducer;
