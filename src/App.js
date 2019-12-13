import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchContainer from './components/SearchContainer'
import Jumbotron from 'react-bootstrap/Jumbotron'



const App = (props) => {
  return (
    <div className="App">
    <Jumbotron>
      <h1>OMDb Movie Search</h1>
      
    </Jumbotron>
    <SearchContainer /> 
    </div>
  )
}

export default App;
