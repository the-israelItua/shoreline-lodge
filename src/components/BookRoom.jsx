import React, { Component } from "react";

class BookRoom extends Component {
  render() {
    return (
      <div className="bookroom_page">
        <div className="container">
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6 form">
              <h3>Thanks For Choosing ShoreLine Lodge.</h3>
              <h5>Kindly fill the form below.</h5>
              <form>
                <div className="form-group">
                  <label htmlFor="Name">Full Name</label>
                  <input type="text" className="form-control" id="Name" />
                </div>
                <div className="form-group">
                  <label htmlFor="paymentMode">
                    How do you want to make payment?
                  </label>
                  <select id="paymentMode" className="form-control">
                    <option>On Arrival</option>
                    <option>Bank Transfer</option>
                    <option>Paypal</option>
                  </select>
                </div>
                <button className="btn btn-dark">Submit</button>
              </form>
            </div>
            <div className="col-md-3"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default BookRoom;
