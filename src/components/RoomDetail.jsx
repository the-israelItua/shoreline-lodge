import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getRoom } from "../store/actions";
import Banner from "../layouts/Banner";

class RoomDetail extends Component {
  componentDidMount() {
    this.props.getRoom(this.props.id);
  }
  render() {
    const selectComp =
      this.props.selected === 0
        ? null
        : this.props.selected.map((sel) => {
            return (
              <React.Fragment key={sel.id}>
                <Banner
                  class="detail_banner"
                  header={sel.type}
                  btnMsg={`Book This Room For $${sel.price}`}
                  bg={sel.bg}
                  link={`/bookroom/${sel.id}`}
                />
                <div className="container">
                  <div className="row">
                    <div className="col-md-3 m-3">
                      {" "}
                      <img src={require(`../images/${sel.exImg1}`)} alt="" />
                    </div>
                    <div className="col-md-3 m-3">
                      {" "}
                      <img src={require(`../images/${sel.exImg2}`)} alt="" />
                    </div>
                    <div className="col-md-3 m-3">
                      {" "}
                      <img src={require(`../images/${sel.exImg3}`)} alt="" />
                    </div>
                  </div>
                </div>

                <div className="container">
                  <div className="row">
                    <div className="col-md-7">
                      <h1>Details</h1>
                      <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Esse assumenda accusantium necessitatibus
                        reiciendis nemo ratione corrupti doloremque iusto,
                        architecto in expedita illo voluptatem commodi magni
                        voluptatibus omnis vel quas nostrum libero nesciunt
                        cupiditate natus deleniti. Ipsa qui aut, aliquid
                        assumenda officiis quis? Esse accusamus corporis labore
                        deleniti, quos eaque ipsam dolorum aperiam magnam fugit
                        facere veritatis nostrum doloribus temporibus deserunt
                        omnis quisquam repellat! Ducimus sit at fugit adipisci
                        ad delectus.
                      </p>
                    </div>
                    <div className="col-md-5">
                      <h1>Info</h1>
                      <p>Price: ${sel.price}</p>
                      <p>Size: 400 sqft</p>
                      <p>Max Capacity: 1 person</p>
                      <p>Pets allowedds</p>
                      <p>Free Breakfast: Included</p>
                    </div>
                  </div>
                  <h3 className="col-md-12">Extras</h3>
                  <div className="row">
                    <ul>
                      <li>Plush pillows and breathable bed linens</li>
                      <li>Soft, oversized bath towels</li>
                      <li>Full-sized, pH-balanced toiletries</li>
                      <li>Complimentary refreshments</li>
                      <li>Adequate safety/ security</li>
                      <li>Internet</li>
                      <li>Comfortable bed</li>
                    </ul>
                  </div>
                  <Link to={`/bookroom/${sel.id}`}>
                    <button className="btn btn-dark banner_btn">
                      Book this room for ${sel.price}
                    </button>
                  </Link>
                </div>
              </React.Fragment>
            );
          });
    return selectComp;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    id: ownProps.match.params.id,
    selected: state.selected,
  };
};
export default connect(mapStateToProps, { getRoom })(RoomDetail);
