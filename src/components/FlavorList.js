import React from 'react';
import Flavor from './Flavor';

function FlavorList(props) {

  return (
    <React.Fragment>
      <h3>All Flavors:</h3>
      {props.masterFlavorList.map((flavor, index) => 
        <Flavor 
          name={flavor.name}
          type={flavor.type}
          brand={flavor.brand}
          price={flavor.price}
          weightPurchased={flavor.weightPurchased}
          servings={flavor.servings}
        />
      )}
    </React.Fragment>
  );
}

export default FlavorList;