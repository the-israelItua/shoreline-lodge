import React from "react";
import { Link } from "react-router-dom";

const Banner = (props) => {
  return (
    <div
      className={props.class}
      style={{
        background: `url(${require(`../images/${props.bg}`)}) no-repeat`,
        backgroundAttachment: "fixed",
      }}
    >
      <div className="conatainer">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <div className="text_holder">
              <h1 className="banner_text">{props.header}</h1>
              <h4 className="banner_text">{props.subtitle}</h4>
              <Link to={props.link}>
                <button className="btn btn-dark banner_btn">
                  {props.btnMsg}
                </button>
              </Link>
            </div>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
