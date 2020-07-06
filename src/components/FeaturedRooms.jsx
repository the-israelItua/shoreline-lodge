import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getRooms } from "../store/actions";
import RoomCard from "./RoomCard";

class FeaturedRooms extends Component {
  componentDidMount() {
    this.props.getRooms();
  }
  render() {
    const featured = this.props.rooms.slice(0, 3);
    const roomsComp =
      this.props.rooms.length === 0 ? (
        <p>Loading...</p>
      ) : (
        featured.map((room) => (
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
      <>
        <h1 className="subTitle">Featured Rooms</h1>
        <div className="container">
          <div className="row">{roomsComp}</div>
        </div>
        <Link to="/rooms">
          <h5 className="featured_text">See more rooms</h5>
        </Link>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    rooms: state.rooms,
  };
};
export default connect(mapStateToProps, { getRooms })(FeaturedRooms);
