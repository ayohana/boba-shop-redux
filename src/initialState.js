import { v4 } from 'uuid';

const firstId = v4();
const secondId = v4();

export default {
  displayList: true,
  displayForm: false,
  selectedFlavor: null,
  announce: "",
  masterFlavorList: {
    [firstId] : {
      name: "Black Milk Tea",
      category: "Milk Tea",
      brand: "GreenMax",
      price: "14.99",
      weightPurchased: 1.5,
      servings: 3,
      id: firstId
    },
    [secondId] :{
      name: "Banana Milk Tea",
      category: "Fruit Milk Tea",
      brand: "Bubble Tea Supply",
      price: "19.50",
      weightPurchased: 2.2,
      servings: 10,
      id: secondId
    }
  }
}