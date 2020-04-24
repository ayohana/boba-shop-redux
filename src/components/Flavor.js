import React from 'react';
import PropTypes from "prop-types";

function Flavor(props) {
  return (
    <React.Fragment>
      <h4>{props.type} | {props.name}</h4>
      <p>Brand: {props.brand}</p>
      <p>Price: ${props.price} for {props.weightPurchased}lbs</p>
      <p>Remaining servings: {props.servings}</p>
    </React.Fragment>
  );
}

Flavor.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.string,
  weightPurchased: PropTypes.number,
  servings: PropTypes.number
};

export default Flavor;