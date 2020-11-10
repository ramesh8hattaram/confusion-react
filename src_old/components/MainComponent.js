[2:07 AM, 11/6/2020] Manu: import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

class Menu extends Component {

  constructor(props){
    super(props);
  }

  render(){

    const menu = this.props.dishes.map((dish) => {
      return(
        <div key = {dish.id} className = "col-12 col-md-5 m-1">
          <Card onClick ={() => this.props.onClick(dish.id)} >
              <CardImg width = "100%" src = {dish.image} alt = {dish.name} />
            <CardImgOverlay>
            <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
      );
    });

    console.log('Menu Component render is invoked');

    return (
      <div className = "container">
        <div className = "row">
            {menu}
        </div>
      </div>
    );
  }

}

export default Menu;
[2:07 AM, 11/6/2020] Manu: import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import Dishdetail from './DishdetailComponent';
import { DISHES } from '../shared/dishes';

class Main extends Component {

  constructor(props){
    super(props);

    this.state = {
      dishes: DISHES,
      selectedDish: null
    };
  }

  onDishSelect(dishId){
    this.setState({ selectedDish: dishId });
  }

  render() {
    return (
      <div>
        <Navbar dark color = "primary">
          <div className = "container">
            <NavbarBrand href = "/"> Ristorante Con Fusion </NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes = {this.state.dishes}
              onClick={(dishId) => this.onDishSelect(dishId)}/>
        <Dishdetail
          selectedDish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
      </div>
    );
  }
}

export default Main;