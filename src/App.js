import React from "react";
import { connect } from "react-redux";

import logo from "./logo.svg";
import "./App.css";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Tasks from "./components/Tasks";

import { authSelector } from "./redux/selectors";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const HomeComp = (
      <div className="Home">
        {this.props.showSignUp ? <SignUp /> : <Login />}
      </div>
    );
    const AppComp = (
      <div className="App">
        <Header logo={logo} />
        <Tasks />
      </div>
    );
    return (
      <div className="container mx-auto">
        {this.props.user ? AppComp : HomeComp}

        <Footer>
          <p className="text-center text-gray-500 text-xs">
            &copy;2020 Alexander Jaramillo. All rights reserved.
          </p>
        </Footer>
      </div>
    );
  }
}

/***
 * Container
 */
const { getLoggedUser, isShowingSignup } = authSelector;
const mapStateToProps = (state) => {
  return {
    user: getLoggedUser(state),
    showSignUp: isShowingSignup(state),
  };
};
/* 
const mapDispatchToProps = {
};

 */
export default connect(mapStateToProps /* ,
  mapDispatchToProps */)(App);
