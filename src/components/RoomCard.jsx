import React, { Component } from "react";
import { Link } from "react-router-dom";

class RoomCard extends Component {
  state = {
    display: "none",
  };

  view = () => {
    this.setState({ display: "block" });
  };

  unView = () => {
    this.setState({ display: "none" });
  };

  render() {
    const { id, imgPath, type, price } = this.props;
    return (
      <div
        className="col-sm-4 mb-3"
        onMouseOver={this.view}
        onMouseOut={this.unView}
      >
        <div className="card m-3 room-card">
          <img src={require(`../images/${imgPath}`)} alt="room" />

          <h5 className="card-title room-type m-2">{type}</h5>
        </div>
        <div>
          <h5 className="price-tag">${price}</h5>
        </div>
        <div className="room-link" style={{ display: this.state.display }}>
          <Link to={`/room/${id}`}>
            <button className="btn feature_btn btn-lg">Details</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default RoomCard;
