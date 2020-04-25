import React from 'react';
import FlavorList from './FlavorList';
import NewFlavorForm from './NewFlavorForm';
import FlavorDetails from './FlavorDetails';

const masterFlavorList = [
  {
    name: "Black Milk Tea",
    type: "Milk Tea",
    brand: "GreenMax",
    price: "14.99",
    weightPurchased: 1.5,
    servings: 3,
    id: "firstrandomstring"
  },
  {
    name: "Banana Milk Tea",
    type: "Fruit Milk Tea",
    brand: "Bubble Tea Supply",
    price: "19.50",
    weightPurchased: 2.2,
    servings: 50,
    id: "secondrandomstring"
  },
  {
    name: "Mocha Milk Tea",
    type: "Coffee Milk Tea",
    brand: "Bossen",
    price: "10.95",
    weightPurchased: 2.2,
    servings: 50,
    id: "thirdrandomstring"
  },
];

class InventoryControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterFlavorList: masterFlavorList,
      displayList: true,
      displayForm: false,
      selectedFlavor: null,
      announce: ""
    };
  }

  handleDisplayForm = () => {
    this.setState({
      displayList: false,
      displayForm: true,
      selectedFlavor: null,
      announce: ""
    });
  }

  handleDisplayList = () => {
    this.setState({
      displayList: true,
      displayForm: false,
      selectedFlavor: null,
      announce: ""
    });
  }

  handleDisplayDetails = (id) => {
    const selectedFlavor = this.state.masterFlavorList.filter(flavor => flavor.id === id)[0];
    this.setState({
      displayList: true,
      displayForm: false,
      selectedFlavor: selectedFlavor,
      announce: ""
    });
  }

  handleNewFlavorSubmission = (newFlavor) => {
    const newMasterFlavorList = this.state.masterFlavorList.concat(newFlavor);
    this.setState({
      masterFlavorList: newMasterFlavorList,
      displayList: true,
      displayForm: false,
      selectedFlavor: null,
      announce: ""
    });
  }

  handleMinusServing = (flavorToEdit) => {
    const findIndex = this.state.masterFlavorList.findIndex(flavor => flavor.id === flavorToEdit.id);
    console.log(findIndex);
    const editedMasterFlavorList = this.state.masterFlavorList;
    editedMasterFlavorList[findIndex] = flavorToEdit;
    this.setState({
      masterFlavorList: editedMasterFlavorList,
      displayList: true,
      displayForm: false,
      selectedFlavor: null,
      announce: ""
    });
  }

  handleOutOfServings = () => {
    this.setState({
      announce: "No more servings remaining. Please restock."
    })
  }

  render(){

    let currentlyVisibleState = null;

    if (this.state.displayForm) {
      currentlyVisibleState = 
        <NewFlavorForm 
          onNewFlavorCreation={this.handleNewFlavorSubmission} 
        />
    } else if (this.state.selectedFlavor != null) {
      currentlyVisibleState =
      <FlavorDetails 
        flavor={this.state.selectedFlavor}
      />
    } else if (this.state.displayList) {
      currentlyVisibleState = 
        <FlavorList 
          masterFlavorList={this.state.masterFlavorList}
          onFlavorSelection={this.handleDisplayDetails}
          onMinusSelection={this.handleMinusServing}
          onOutOfServings={this.handleOutOfServings}
        />;
    }

    return (
      <React.Fragment>
        <span><p>{this.state.announce}</p></span>
        <button onClick={this.handleDisplayForm}>New Supply</button>
        <button onClick={this.handleDisplayList}>All Flavors</button>
        {currentlyVisibleState}
      </React.Fragment>
    );
  }
}

export default InventoryControl;