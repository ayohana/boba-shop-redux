import React from 'react';
import PropTypes from "prop-types";

const flavorStyle = {
  backgroundColor: "#0F4C81",
  borderColor: "#F1F1E6",
  borderStyle: "solid",
  padding: "5px",
  color: "#DBA11C"
};

function Flavor(props) {
  return (
    <React.Fragment>
      <div style={flavorStyle}>
        <h4>{props.type} | {props.name}</h4>
        <p>Brand: {props.brand}</p>
        <p>Price: ${props.price} for {props.weightPurchased}lbs</p>
        <p>Remaining servings: {props.servings}</p>
      </div>
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