import React from 'react';

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="profile">
        <p>Name: {this.props.user.name}</p>
        <p>Email: {this.props.user.email}</p>
        <p>City: {this.props.user.city}</p>
        <p>Age: {2021 - this.props.user.birthYear}</p>
      </div>
    );
  }
}
