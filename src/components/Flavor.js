import React from 'react';
import PropTypes from "prop-types";

const flavorStyle = {
  backgroundColor: "#0F4C81",
  borderColor: "#887456",
  borderStyle: "dotted",
  padding: "20px",
  margin: "10px",
  color: "#DBA11C"
};

function Flavor(props) {
  return (
    <React.Fragment>
      <div onClick={() => props.whenFlavorClicked(props.id)} style={flavorStyle}>
        <h4>{props.name} | Remaining servings: {props.servings}</h4>
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
  servings: PropTypes.number,
  id: PropTypes.string,
  whenFlavorClicked: PropTypes.func
};

export default Flavor;