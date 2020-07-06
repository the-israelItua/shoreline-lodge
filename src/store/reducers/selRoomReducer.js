import { GET_ROOM } from "../types";
import { roomData } from "./RoomData";

const selRoomReducer = (state = [], action) => {
  switch (action.type) {
    case GET_ROOM:
      const select = roomData.filter((room) => room.id === action.payload);
      return select;
    default:
      return state;
  }
};

export default selRoomReducer;
