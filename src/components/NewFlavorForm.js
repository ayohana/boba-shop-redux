import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

function NewFlavorForm(props) {

  function handleNewFormSubmission(event) {
    event.preventDefault();
    props.onNewFlavorCreation({
      name: event.target.name.value,
      category: event.target.category.value,
      brand: event.target.brand.value,
      price: event.target.price.value,
      weightPurchased: parseFloat(event.target.weightPurchased.value),
      servings: parseInt(Math.floor(event.target.weightPurchased.value / 2.2 * 50)),
      id: v4()
    });
  }

  return (
    <React.Fragment>
      <h1>Add New Supply of Flavor Powder</h1>
      <form onSubmit={handleNewFormSubmission}>
        <label htmlFor="name">
          Flavor:
        </label>
        <input 
          type="text"
          name="name"
          placeholder="Strawberry"
          required
        />

        <label htmlFor="category">
          Category of flavor:
        </label>
        <input 
          type="text"
          name="category"
          placeholder="Fruit Tea"
          required
        />

        <label htmlFor="brand">
          Brand of supply:
        </label>
        <input 
          type="text"
          name="brand"
          placeholder="Boba Supply Company"
          required
        />

        <label htmlFor="price">
          Price of purchase:
        </label>
        <input 
          type="text"
          name="price"
          placeholder="19.85"
          required
        />

        <label htmlFor="weightPurchased">
          Weight of purchase (in lbs):
        </label>
        <input 
          type="number"
          name="weightPurchased"
          step="0.01"
          min="0.01"
          placeholder="2.2"
          required
        />

        <button type="submit">Add supply</button>

      </form>
    </React.Fragment>
  );
}

NewFlavorForm.propTypes = {
  onNewFlavorCreation: PropTypes.func
};

export default NewFlavorForm;