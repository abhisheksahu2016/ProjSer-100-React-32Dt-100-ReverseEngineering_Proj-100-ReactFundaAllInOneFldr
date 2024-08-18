class Parent extends Component{
    constructor(props){
     super(props);
     this.state={
      child1=0;
      child2=1;
     };
    }
    render()
    {
     return (
      <Child1 value={this.state.child1} />
      <Child2 value={this.state.child2} />
     );
    }
   }