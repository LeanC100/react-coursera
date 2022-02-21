import React, {Component} from 'react';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap-social/bootstrap-social.css';
import Footer from './FooterComponent';
import Header from './HeaderComponent';
import Menu from './MenuComponents';
import DishDetail from './DishDetailComponent';
import { DISHES } from '../shared/dishes';

class Main extends Component {

    constructor(props) {
      super(props);
      this.state = {
        dishes: DISHES,
        selectedDish: null
      };
    }
  
    onDishSelect(dishID){
        this.setState({selectedDish: dishID})
    }
  render(){
    return (
      <div >
        <Footer />
        <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)}/>
        <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
        <Header />
      </div>
    );
  }
}

export default Main;
