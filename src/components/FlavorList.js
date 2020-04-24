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
          name={flavor.name}
          type={flavor.type}
          brand={flavor.brand}
          price={flavor.price}
          weightPurchased={flavor.weightPurchased}
          servings={flavor.servings}
          id={flavor.id}
        />
      )}
    </React.Fragment>
  );
}

FlavorList.propTypes = {
  masterFlavorList: PropTypes.array,
  onFlavorSelection: PropTypes.func
};

export default FlavorList;