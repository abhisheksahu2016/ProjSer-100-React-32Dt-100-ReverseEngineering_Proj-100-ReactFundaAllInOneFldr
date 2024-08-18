class Car extends React.Component {
  constructor() {
    super();
    this.state = {color: "red"};
  }

  constructor(props) {
    super(props);
  }
  
  render() {
    return <h2>I am a Car!</h2>;
  }
}