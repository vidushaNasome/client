import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state={ApiRespose:""};
  }

  CallAPI(){
    fetch("http://localhost:9000/test")
        .then(res=>res.test())
        .then(res=>this.setState({ApiResponse:res}));
  }
  componentWillMount(){
    this.callAPI();
  }

 render(){

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>


      </header>
      <p>{this.state.ApiResponse}</p>

    </div>
  );


}
}

export default App;
