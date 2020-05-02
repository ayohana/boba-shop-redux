import React from 'react';
import PropTypes from "prop-types";
import minusIcon from './minus-icon.png';
import './App.css';

function Flavor(props) {
  return (
    <React.Fragment>
      <div className="flavor">
        <h4>
          <img className="minusIconStyle" onClick={() => props.whenMinusClicked(props.id)} src={minusIcon} alt="Decrease Serving by 1" />
          <span className="flavorText" onClick={() => props.whenFlavorClicked(props.id, props.masterFlavorList)}>
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