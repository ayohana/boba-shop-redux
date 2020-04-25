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

  const handleMinusServing = () => {
    const editedServing = {
      name: props.name,
      type: props.type,
      brand: props.brand,
      price: props.price,
      weightPurchased: props.weightPurchased,
      servings: props.servings - 1,
      id: props.id
    }
    if (editedServing.servings < 0) {
      props.whenOutOfServings();
    } else {
      props.whenMinusClicked(editedServing);
    }
  };

  return (
    <React.Fragment>
      <div style={flavorStyle}>
        <h4>
          <img onClick={handleMinusServing} src={minusIcon} style={minusIconStyle} alt="Decrease Serving by 1" />
          <span onClick={() => props.whenFlavorClicked(props.id)} style={textStyle}>
            {props.name} | Remaining servings: {props.servings}
          </span>
        </h4>
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
  whenFlavorClicked: PropTypes.func,
  whenMinusClicked: PropTypes.func,
  whenOutOfServings: PropTypes.func
};

export default Flavor;