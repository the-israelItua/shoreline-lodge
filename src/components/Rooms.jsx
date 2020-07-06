import React, { Component } from "react";
import { connect } from "react-redux";
import { getRooms } from "../store/actions";
import RoomCard from "./RoomCard";

class Rooms extends Component {
  componentDidMount() {
    this.props.getRooms();
  }
  render() {
    const roomsComp =
      this.props.rooms.length === 0 ? (
        <p>Loading...</p>
      ) : (
        this.props.rooms.map((room) => (
          <RoomCard
            key={room.id}
            id={room.id}
            imgPath={room.img_path}
            type={room.type}
            price={room.price}
          />
        ))
      );
    return (
      <div className="container">
        <div className="row">{roomsComp}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    rooms: state.rooms,
  };
};
export default connect(mapStateToProps, { getRooms })(Rooms);
