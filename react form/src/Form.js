import React from "react";
import React, { useState } from "react";
import ReactDOM from "react-dom";

export default class Form extends React.Component {
  state = {
    Name: "",
    Age:""
    
  };

  change = e => {
    this.props.onChange({ [e.target.name]: e.target.value });
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    // this.props.onSubmit(this.state);
    this.setState({
      Name: "",
    Age:""
    
    });
    this.props.onChange({
      Name: "",
      Age:""
      
    });
  };

  render() {
    return (
      <form>
        <input
          name="Name"
          placeholder="Name"
          value={this.state.Name}
          onChange={e => this.change(e)}
        />
        <br />
        <input
          name="Age"
          type= "number"
          placeholder="Age"
          value={this.state.Age}
          onChange={e => this.change(e)}
        />
        <br />
        
        <button onClick={e => this.onSubmit(e)}>Submit</button>
      </form>
    );
  }
}


// incrementing the counter
function App() {

 
  const [count, setCount] = useState(0);


  const incrementCount = () => {
 
    setCount(count + 1);
  };

return (
  <div className="app">
    <button onClick={incrementCount}>Submit</button>
    {count}
  </div>
);
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
