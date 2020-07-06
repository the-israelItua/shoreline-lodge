import React, { Component } from "react";
import { connect } from "react-redux";
import { getServices } from "../store/actions";

class Services extends Component {
  componentDidMount() {
    this.props.getServices();
  }

  render() {
    const servicesComp =
      this.props.services.length === 0
        ? null
        : this.props.services.map((service) => (
            <div className="col-md-4 mb-3">
              <div className="card" style={{ textAlign: "center" }}>
                <div className="services_icons">{service.iconType}</div>
                <div className="card-body">
                  <h5 className="card-title">{service.title}</h5>
                  <p className="card-text">{service.text}</p>
                </div>
              </div>
            </div>
          ));

    return (
      <div className="services">
        <h1 className="subTitle">Service Offers</h1>
        <div className="container">
          <div className="row">{servicesComp}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    services: state.services,
  };
};
export default connect(mapStateToProps, { getServices })(Services);
