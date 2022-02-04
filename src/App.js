import { render } from '@testing-library/react';
import React, {Component} from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';
import Menu from './components/MenuComponents'
import { DISHES } from './shared/dishes';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    };
  }
  render(){
    return (
      <div >
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/"> Reistonante con fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes} className="d-flex justify-content-center"/>
      </div>
    );
  }
}

export default App;
