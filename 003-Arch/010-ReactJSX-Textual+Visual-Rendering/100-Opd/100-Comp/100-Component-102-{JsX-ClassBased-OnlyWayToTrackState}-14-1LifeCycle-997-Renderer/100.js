class Car extends React.Component {
  constructor() {
    super();
    this.state = {color: "red"};
  }
  render() {
    // return <h2>I am a Car!</h2>;
    return <h2>I am a {this.state.color} Car!</h2>;
    return <h2>I am a {this.props.model}!</h2>;
  }
}