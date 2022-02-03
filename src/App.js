import logo from './logo.svg';
import {Navbar, NavbarBrand} from 'reactstrap';
import Menu from './components/MenuComponents'

function App() {
  return (
    <div >
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/"> Reistonante con fusion</NavbarBrand>
        </div>
      </Navbar>
      <Menu />
    </div>
  );
}

export default App;
