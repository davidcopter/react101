import React from 'react';

export default class HelloMessage extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.name}</p>
      </div>
    );
  }
}
