import React from 'react';
import { v4 } from 'uuid';

function NewFlavorForm(props) {

  function handleNewFormSubmission(event) {
    event.preventDefault();
    props.onNewFlavorCreation({
      name: event.target.name.value,
      type: event.target.type.value,
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
        <label for="name">
          Flavor:
        </label>
        <input 
          type="text"
          name="name"
          placeholder="Strawberry"
          required
        />

        <label for="type">
          Type of flavor:
        </label>
        <input 
          type="text"
          name="type"
          placeholder="Fruit Tea"
          required
        />

        <label for="brand">
          Brand of supply:
        </label>
        <input 
          type="text"
          name="brand"
          placeholder="Boba Supply Company"
          required
        />

        <label for="price">
          Price of purchase:
        </label>
        <input 
          type="text"
          name="price"
          placeholder="19.85"
          required
        />

        <label for="weightPurchased">
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

export default NewFlavorForm;