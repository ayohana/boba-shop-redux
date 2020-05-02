import React from 'react';
import PropTypes from "prop-types";
import minusIcon from './minus-icon.png';

const flavorStyle = {
  backgroundColor: "#0F4C81",
  borderColor: "#887456",
  borderStyle: "dotted",
  padding: "15px",
  margin: "10px",
  color: "#DBA11C"
};

const minusIconStyle = {
  maxWidth: "20px"
};

const textStyle = {
  padding: "10px"
};

function Flavor(props) {

  return (
    <React.Fragment>
      <div style={flavorStyle}>
        <h4>
          {/* <img onClick={() => props.whenMinusClicked(props.id)} src={minusIcon} style={minusIconStyle} alt="Decrease Serving by 1" /> */}
          <span onClick={() => props.whenFlavorClicked(props.id, props.masterFlavorList)} style={textStyle}>
            {props.name} | Remaining servings: {props.servings}
          </span>
        </h4>
      </div>
    </React.Fragment>
  );
}

Flavor.propTypes = {
  name: PropTypes.string,
  category: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.string,
  weightPurchased: PropTypes.number,
  servings: PropTypes.number,
  id: PropTypes.string,
  whenFlavorClicked: PropTypes.func,
  whenMinusClicked: PropTypes.func
};

export default Flavor;