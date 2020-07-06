import { GET_ROOMS } from "../types";
import { roomData } from "./RoomData";

const roomsReducer = (state = roomData, action) => {
  switch (action.type) {
    case GET_ROOMS:
      return state;
    default:
      return state;
  }
};

export default roomsReducer;
