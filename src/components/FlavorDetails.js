import React from "react";

const flavorStyle = {
  backgroundColor: "#0F4C81",
  borderColor: "#887456",
  borderStyle: "dotted",
  padding: "20px",
  color: "#DBA11C"
};

function FlavorDetails(props){

  const { flavor } = props

  return (
    <React.Fragment>
      <div style={flavorStyle}>
        <h3>{flavor.type} | {flavor.name}</h3>
        <p>Brand: {flavor.brand}</p>
        <p>Price: ${flavor.price} for {flavor.weightPurchased}lbs</p>
        <p>Remaining servings: {flavor.servings}</p>
      </div>
    </React.Fragment>
  );
}

export default FlavorDetails;