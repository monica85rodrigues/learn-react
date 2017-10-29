class Button extends React.Component 
{
		state = { counter: 0 };
    
    handleClick = () => 
    {
    	/*this.setState({
      	counter: this.state.counter + 1
      });*/
      
      this.setState( (prevState) => ({
      	counter: prevState.counter + 1
      }));
    };
    
    render()
    {
    		return (
        	<button onClick={this.handleClick}>
          	{this.state.counter}
          </button>
        );
    }
}

const Result = (props) => {
  
	return (
  	<div>{props.description}</div>
  );
};

class App extends React.Component {
	render (){
  	return (
    	<div>
    	  <Button />
        <Result description="Results" />
    	</div>
    );
  }
};

ReactDOM.render(<App />, mountNode);