import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./layouts/NavBar";
import HomePage from "./layouts/HomePage";
import RoomsPage from "./components/RoomsPage";
import RoomDetail from "./components/RoomDetail";
import BookRoom from "./components/BookRoom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/rooms" component={RoomsPage} />
          <Route path="/room/:id" component={RoomDetail} />
          <Route path="/bookroom/:id" component={BookRoom} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
