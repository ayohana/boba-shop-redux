import React from 'react';
import FlavorList from './FlavorList';
import NewFlavorForm from './NewFlavorForm';
import FlavorDetails from './FlavorDetails';
import * as a from '../actions/index';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

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

  // handleNewFlavorSubmission = (newFlavor) => {
  //   const newMasterFlavorList = this.state.masterFlavorList.concat(newFlavor);
  //   this.setState({
  //     masterFlavorList: newMasterFlavorList,
  //     // displayList: true,
  //     displayForm: false,
  //     selectedFlavor: null,
  //     announce: ""
  //   });
  // }

  // handleMinusServing = (id) => {
  //   this.setState((prevState) => { 
  //     const copyMasterFlavorList = [...prevState.masterFlavorList];
  //     const findIndex = copyMasterFlavorList.findIndex(flavor => flavor.id === id);
  //     const copyFindFlavor = {...copyMasterFlavorList[findIndex]};
  //     if (copyFindFlavor.servings === 0) {
  //       return {
  //         announce: "No more servings remaining. Please restock."
  //       };
  //     } else {
  //       copyFindFlavor.servings -= 1;
  //       copyMasterFlavorList[findIndex] = copyFindFlavor;
  //       return {
  //         masterFlavorList: copyMasterFlavorList,
  //         // displayList: true,
  //         displayForm: false,
  //         selectedFlavor: null,
  //         announce: ""
  //       };
  //     }
  //   });
  // }


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
            // onNewFlavorCreation={this.handleNewFlavorSubmission} 
          />;
      } else if (props.displayList) {
        buttonText = "Create New Supply";
        currentlyVisibleState = 
          <FlavorList 
            masterFlavorList={props.masterFlavorList}
            onFlavorSelection={handleDisplayDetails}
            // onMinusSelection={this.handleMinusServing}
          />;
      }
    }
  }

  setVisibility();
  console.log(props);

  return (
    <React.Fragment>
      {/* <span><p>{this.state.announce}</p></span> */}
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