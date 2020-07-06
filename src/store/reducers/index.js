import { combineReducers } from "redux";
import roomsReducer from "./roomsReducer";
import selRoomReducer from "./selRoomReducer";
import servicesReducer from "./servicesReducer";

const Reducers = combineReducers({
  rooms: roomsReducer,
  selected: selRoomReducer,
  services: servicesReducer,
});

export default Reducers;
