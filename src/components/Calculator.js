import React from 'react';

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { results: 0 };
  }

  componentDidMount() {
    this.setState((state) => ({
      results: this.props.a + this.props.b,
    }));

    // let sum = this.props.a + this.props.b;
    // this.setState((state) => ({
    //   results: sum,
    // }));
  }

  render() {
    return (
      <p>
        Your result of {this.props.a}+{this.props.b} is {this.state.results}
      </p>
    );
  }
}
