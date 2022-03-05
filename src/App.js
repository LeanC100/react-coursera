import React, {Component} from 'react';
import Main from './components/MainComponents';
import './App.css'
import {BrowserRouter} from 'react-router-dom';
import history from './history';

const warn = console.warn;

function logWarning(...warnings){
  let showWarning = true;
  warnings.forEach(warning => {
    if (warning.includes("UNSAFE_")) showWarning = false;
    else if (warning.includes("SourceMap")) showWarning = false;
    else if (warning.includes("DevTools")) showWarning = false;
  });
  if(showWarning) warn(...warnings);
}


console.warn  = logWarning;
class App extends Component {

  render(){
    return (
      <BrowserRouter history={history}>
        <div className='App' >
          <Main />
        </div>
      </BrowserRouter>
      
    );
  }
}

export default App;
