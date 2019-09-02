import React, { Component } from "react";
import Contact from "./Contact";

class Contacts extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
      ]
    };
  }
  render() {
    return (
      <div>
        {this.state.contacts.map(contact => (
          <Contact
            name={contact.name}
            phone={contact.phone}
            email={contact.email}
            key={contact.id}
          />
        ))}
      </div>
    );
  }
}

export default Contacts;
