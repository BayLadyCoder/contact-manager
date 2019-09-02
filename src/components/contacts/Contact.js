import React, { Component } from "react";
import { Consumer } from "../../context";

class Contact extends Component {
  state = {
    showContactInfo: false
  };

  // using arrow function instead of .bind in constructor function
  onShowClick = () => {
    // toggle state (true/false) when user click
    this.setState({ showContactInfo: !this.state.showContactInfo });
  };

  onDeleteClick = (id, dispatch) => {
    dispatch({ type: "DELETE_CONTACT", payload: id });
  };

  render() {
    const { name, email, phone, id } = this.props.contact;
    const { showContactInfo } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;

          return (
            <div className="card card-body mb-3">
              <h4 className="m-1">
                {name}
                <i
                  onClick={this.onShowClick}
                  className={
                    showContactInfo
                      ? "fas fa-chevron-circle-up ml-2"
                      : "fas fa-chevron-circle-down ml-2"
                  }
                  style={{ cursor: "pointer" }}
                ></i>
                <i
                  onClick={this.onDeleteClick.bind(this, id, dispatch)}
                  className={showContactInfo ? "fas fa-times" : "fas fa-times"}
                  style={{ cursor: "pointer", float: "right", color: "red" }}
                ></i>
              </h4>
              {showContactInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">Email: {email}</li>
                  <li className="list-group-item">Phone: {phone}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Contact;
