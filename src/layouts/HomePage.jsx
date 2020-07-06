import React, { Component } from "react";
import Banner from "./Banner";
import Footer from "./Footer";
import Services from "../components/Services";
import FeaturedRooms from "../components/FeaturedRooms";

class HomePage extends Component {
  render() {
    return (
      <>
        <Banner
          class="__banner__"
          header="ShoreLine Lodge"
          subtitle="Deluxe Rooms Starting At $100"
          btnMsg="Book Now"
          bg="black-outdoor-lounge-chair-in-between-blue-swimming-pool-189296.jpg"
          link="/rooms"
        />
        <Services />
        <FeaturedRooms />
        <Footer />
      </>
    );
  }
}

export default HomePage;
