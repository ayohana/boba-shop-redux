import React from 'react';
import FlavorList from './FlavorList';

const masterFlavorList = [
  {
    name: "Black Milk Tea",
    type: "Milk Tea",
    brand: "GreenMax",
    price: "14.99",
    weightPurchased: 1.5,
    servings: 3
  },
  {
    name: "Banana Milk Tea",
    type: "Fruit Milk Tea",
    brand: "Bubble Tea Supply",
    price: "19.50",
    weightPurchased: 2.2,
    servings: 50
  },
  {
    name: "Mocha Milk Tea",
    type: "Coffee Milk Tea",
    brand: "Bossen",
    price: "10.95",
    weightPurchased: 2.2,
    servings: 50
  },
];

class InventoryControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterFlavorList: masterFlavorList
    };
  }

  render(){
    return (
      <React.Fragment>
        <h3>This is InventoryControl</h3>
        <FlavorList masterFlavorList={this.state.masterFlavorList}/>
      </React.Fragment>
    );
  }

}

export default InventoryControl;