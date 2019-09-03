import React, { Component } from "react";

class Test extends Component {
  state = {
    test: ""
  };

  componentDidMount() {
    console.log("component DID MOUNT");
  }
  UNSAFE_componentWillMount() {
    console.log("component WILL MOUNT");
  }
  componentDidUpdate() {
    console.log("component DID UPDATE");
  }
  UNSAFE_componentWillUpdate() {
    console.log("component Will UPDATE");
  }

  UNSAFE_componentWillReceiveProps(nextProps, nextState) {
    console.log("componentWillReceiveProps");
  }

  static UNSAFE_getDerivedStateFromProps(nextProps, prevState) {
    return {
      test: "something"
    };
  }

  UNSAFE_getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate");
  }

  render() {
    return (
      <div>
        <h1>Test Component</h1>
      </div>
    );
  }
}

export default Test;
