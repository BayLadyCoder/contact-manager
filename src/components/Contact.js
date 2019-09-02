import React, { Component } from "react";

class Contact extends Component {
  state = {
    showContactInfo: false
  };

  // using arrow function instead of .bind in constructor function
  onShowClick = () => {
    // toggle state (true/false) when user click
    this.setState({ showContactInfo: !this.state.showContactInfo });
    console.log(this.state);
  };

  render() {
    const { name, email, phone } = this.props;
    const { showContactInfo } = this.state;

    return (
      <div className="card card-body mb-3">
        <h4 className="d-flex justify-content-between m-1">
          {name}
          <i
            onClick={this.onShowClick}
            className={
              showContactInfo
                ? "fas fa-chevron-circle-up"
                : "fas fa-chevron-circle-down"
            }
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
  }
}

export default Contact;
