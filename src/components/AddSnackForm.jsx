import { useState } from "react";
import SnackProductItem from "./SnackProductItem";
import { snacks } from "../datasource/snack_data";

function AddSnackForm() {
  const [brandName, setBrandName] = useState("");
  const [flavor, setFlavor] = useState("");
  const [mainIngredient, setMainIngredient] = useState("");
  const [snackProducts, setSnackProducts] = useState(snacks);

  function handleFormSubmission(event) {
    event.preventDefault();
    if (!brandName || !flavor || !mainIngredient) {
      return;
    }

    const snackID = snackProducts.length + 1;
    const addedSnack = {
      id: snackID,
      brand_Name: brandName,
      flavor: flavor,
      main_Ingredient: mainIngredient,
    };

    setSnackProducts((snackProducts) => [...snackProducts, addedSnack]);
    console.log("form submitted successfully!");
    console.log(snackProducts);
  }

  const snackItems = snackProducts.map((snackProduct) => {
    return (
      <SnackProductItem
        key={snackProduct.id}
        brand_Name={snackProduct.brand_Name}
        flavor={snackProduct.flavor}
        main_Ingredient={snackProduct.main_Ingredient}
      />
    );
  });

  return (
    <div>
      <form onSubmit={handleFormSubmission}>
        <label htmlFor="brand-name">Brand Name:</label>
        <input
          id="brand-name"
          type="text"
          value={brandName}
          onChange={(event) => setBrandName(event.target.value)}
        />
        <label htmlFor="flavor">Flavor:</label>
        <input
          id="flavor"
          type="text"
          value={flavor}
          onChange={(event) => setFlavor(event.target.value)}
        />
        <label htmlFor="main-ingredient">Main Ingredient</label>
        <input
          id="main-ingredient"
          type="text"
          value={mainIngredient}
          onChange={(event) => setMainIngredient(event.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      <div>
        {snackItems}
      </div>
    </div>
  );
}

export default AddSnackForm;
