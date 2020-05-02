import React from 'react';
import PropTypes from 'prop-types';
import './App.css';

function FlavorDetails(props){

  const { flavor } = props

  return (
    <React.Fragment>
      <div className="flavorDetails">
        <h3>{flavor.category} | {flavor.name}</h3>
        <p>Brand: {flavor.brand}</p>
        <p>Price: ${flavor.price} for {flavor.weightPurchased}lbs</p>
        <p>Remaining servings: {flavor.servings}</p>
      </div>
    </React.Fragment>
  );
}

FlavorDetails.propTypes = {
  flavor: PropTypes.object
};

export default FlavorDetails;