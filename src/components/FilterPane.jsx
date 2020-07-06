import React, { Component } from "react";

class FilterPane extends Component {
  state = { price: 100, minPrice: 100, maxPrice: 500 };

  handlePriceChange = (evt) => {
    this.setState({ price: evt.target.value });
  };
  render() {
    return (
      <div className="p-3">
        <h5>Filter Search</h5>
        <div className="form-group">
          <label htmlFor="roomType">By Room Type</label>
          <select name="roomType" id="roomType" className="form-control">
            <option>All</option>
            <option>Family</option>
            <option>Single</option>
            <option>Couple</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="priceRange">By Price Range</label>
          <h5>${this.state.price}</h5>
          <input
            type="range"
            name="priceRange"
            id="priceRange"
            className="form-control-range"
            min={this.state.minPrice}
            max={this.state.maxPrice}
            value={this.state.price}
            onChange={this.handlePriceChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="roomSize">By Room Size</label>
          <select name="roomSize" id="roomSize" className="form-control">
            <option>All</option>
            <option>100ft - 200ft</option>
            <option>200ft - 300ft</option>
            <option>300ft - 500ft</option>
          </select>
        </div>
      </div>
    );
  }
}

export default FilterPane;
