import React, { Component } from "react";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    case "ADD_CONTACT":
      return {
        ...state,
        contacts: [action.payload, ...state.contacts]
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "Katniss Everdeen",
        email: "katniss@gmail.com",
        phone: "555-555-5555"
      },
      {
        id: 2,
        name: "Sammy Samantha",
        email: "sam@gmail.com",
        phone: "999-999-999"
      },
      {
        id: 3,
        name: "Ringo Oreo",
        email: "ringo@gmail.com",
        phone: "777-777-7777"
      }
    ],
    dispatch: action => {
      this.setState(state => reducer(state, action));
    }
  };
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
