
// Get Or Init or Map->Prop And State->Once
constructor->(prop)
{
  super(prop)

  state
}

// In
// Get Or Init or Map->Prop And State->BeforeRender->ToDOMPrepare
static getDerivedStateFromProps(props, state) {
  return {favoritecolor: props.favcol };
}

// Sys-Ask
shouldComponentUpdate() {
  return false;
}

// Sys-Verify-As Render 
getSnapshotBeforeUpdate(prevProps, prevState) {
  document.getElementById("div1").innerHTML =
  "Before the update, the favorite was " + prevState.favoritecolor;
}

// Sys-Do
// Render
render()
// To Update on my self
render() {
  return (
    <div>
    <h1>My Favorite Color is {this.state.favoritecolor}</h1>
    <button type="button" onClick={this.changeColor}>Change color</button>
    </div>
  );
}
// Own-{Iteration-Nestedp}-{Conditon}

// Child-{Iteration-Nested-MapParentPropChildComponentProp}-{Conditon}


// Sys-Update-Element-VerifyAfterUpdate
componentDidUpdate() {
  document.getElementById("mydiv").innerHTML =
  "The updated favorite is " + this.state.favoritecolor;
}

// Out-Update-Dom
// Get Or Init or Map->Prop And State->AftereRender->FromDOMFetch
componentDidMount
{

}

componentWillUnmount() {
  alert("The component named Header is about to be unmounted.");
}

// Functions

// Functions-ToChangeState-TriggerAfterConstructor 
changeColor = () => {
  this.setState({favoritecolor: "blue"});
}