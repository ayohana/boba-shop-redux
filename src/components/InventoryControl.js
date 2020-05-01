import React from 'react';
import FlavorList from './FlavorList';
import NewFlavorForm from './NewFlavorForm';
import FlavorDetails from './FlavorDetails';
import * as a from '../actions/index';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

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
      displayForm: false,
      selectedFlavor: null,
      announce: ""
    };
  }

  handleDisplayForm = () => {
    this.setState({
      // displayList: false,
      displayForm: true,
      selectedFlavor: null,
      announce: ""
    });
  }

  handleDisplayList = () => {
    this.setState({
      // displayList: true,
      displayForm: false,
      selectedFlavor: null,
      announce: ""
    });
    const { dispatch } = this.props;
    dispatch(a.toggleDisplayList);
  }

  handleDisplayDetails = (id) => {
    const selectedFlavor = this.state.masterFlavorList.filter(flavor => flavor.id === id)[0];
    this.setState({
      // displayList: true,
      displayForm: false,
      selectedFlavor: selectedFlavor,
      announce: ""
    });
  }

  handleNewFlavorSubmission = (newFlavor) => {
    const newMasterFlavorList = this.state.masterFlavorList.concat(newFlavor);
    this.setState({
      masterFlavorList: newMasterFlavorList,
      // displayList: true,
      displayForm: false,
      selectedFlavor: null,
      announce: ""
    });
  }

  handleMinusServing = (id) => {
    this.setState((prevState) => { 
      const copyMasterFlavorList = [...prevState.masterFlavorList];
      const findIndex = copyMasterFlavorList.findIndex(flavor => flavor.id === id);
      const copyFindFlavor = {...copyMasterFlavorList[findIndex]};
      if (copyFindFlavor.servings === 0) {
        return {
          announce: "No more servings remaining. Please restock."
        };
      } else {
        copyFindFlavor.servings -= 1;
        copyMasterFlavorList[findIndex] = copyFindFlavor;
        return {
          masterFlavorList: copyMasterFlavorList,
          // displayList: true,
          displayForm: false,
          selectedFlavor: null,
          announce: ""
        };
      }
    });
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

const mapStateToProps = state => {
  return {
    displayForm: state.displayForm,
    displayList: state.displayList,
    masterFlavorList: state.masterFlavorList,
    selectedFlavor: state.selectedFlavor,
    announce: state.announce
  }
}

InventoryControl = connect(mapStateToProps)(InventoryControl);

export default InventoryControl;