import React from 'react';
import Flavor from './Flavor';
import PropTypes from 'prop-types';

function FlavorList(props) {

  return (
    <React.Fragment>
      <h3>All Flavors:</h3>
      {props.masterFlavorList.map((flavor, index) => 
        <Flavor 
          whenFlavorClicked={props.onFlavorSelection}
          whenMinusClicked={props.onMinusSelection}
          name={flavor.name}
          type={flavor.type}
          brand={flavor.brand}
          price={flavor.price}
          weightPurchased={flavor.weightPurchased}
          servings={flavor.servings}
          id={flavor.id}
          key={flavor.id}
        />
      )}
    </React.Fragment>
  );
}

FlavorList.propTypes = {
  masterFlavorList: PropTypes.array,
  onFlavorSelection: PropTypes.func,
  onMinusSelection: PropTypes.func
};

export default FlavorList;