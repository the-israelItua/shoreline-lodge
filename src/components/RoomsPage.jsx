import React, { Component } from "react";
import Rooms from "./Rooms";
import FilterPane from "./FilterPane";

class RoomsPage extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="col-lg-2 filter_pane">
          <FilterPane />
        </div>
        <div className="row">
          <div className="col-lg-2"></div>
          <div className="col-lg-10">
            <Rooms />
          </div>
        </div>
      </div>
    );
  }
}

export default RoomsPage;
