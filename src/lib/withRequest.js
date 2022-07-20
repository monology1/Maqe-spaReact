import React, { Component } from "react";

//higher order component

export default (WrappedComponent) =>
  class extends Component {
    render() {
      <WrappedComponent />;
    }
  };
