import { GET_ROOMS, GET_ROOM, GET_SERVICES } from "../types";

export const getRooms = () => {
  return {
    type: GET_ROOMS,
  };
};

export const getRoom = (id) => {
  return {
    type: GET_ROOM,
    payload: parseInt(id),
  };
};

export const getServices = () => {
  return {
    type: GET_SERVICES,
  };
};
