import React from 'react';
import FlavorList from './FlavorList';
import NewFlavorForm from './NewFlavorForm';
import FlavorDetails from './FlavorDetails';
import * as a from '../actions/index';
import { connect } from 'react-redux';

function InventoryControl(props){

  const { dispatch } = props;

  const handleDisplayFormAndList = () => {
    if (props.selectedFlavor != null) {
      dispatch(a.resetButton());
      dispatch(a.resetSelectedFlavor());
    } else {
      dispatch(a.toggleDisplayForm());
      dispatch(a.toggleDisplayList());
    }
  }

  const handleDisplayDetails = (id, list) => {
    dispatch(a.selectFlavor(id, list));
    dispatch(a.hideDisplayForm());
    dispatch(a.hideDisplayList());
  }

  const handleNewFlavorSubmission = (newFlavor) => {
    dispatch(a.addOrUpdateFlavor(newFlavor));
    dispatch(a.resetButton());
  }

  const handleMinusServing = (id) => {
    dispatch(a.decrementServings(id));
    const isZeroServings = (props.masterFlavorList[id].servings <= 0);
    const flavorName = props.masterFlavorList[id].name;
    if (isZeroServings) {
      dispatch(a.announce(isZeroServings, flavorName));
    }
  }


  let buttonText = "";
  let currentlyVisibleState = null;

  const setVisibility = () => {
    if (props.selectedFlavor != null) {
      buttonText = "Back To All Flavors";
      currentlyVisibleState =
        <FlavorDetails 
          flavor={props.selectedFlavor}
        />;
    } else {
      if (props.displayForm) {
        buttonText = "Back To All Flavors";
        currentlyVisibleState = 
          <NewFlavorForm 
            onNewFlavorCreation={handleNewFlavorSubmission} 
          />;
      } else if (props.displayList) {
        buttonText = "Create New Supply";
        currentlyVisibleState = 
          <FlavorList 
            masterFlavorList={props.masterFlavorList}
            onFlavorSelection={handleDisplayDetails}
            onMinusSelection={handleMinusServing}
          />;
      }
    }
  }

  setVisibility();
  console.log(props);

  return (
    <React.Fragment>
      <span><p>{props.announce}</p></span>
      <button onClick={handleDisplayFormAndList}>{buttonText}</button>
      {currentlyVisibleState}
    </React.Fragment>
  );
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

export default connect(mapStateToProps)(InventoryControl);