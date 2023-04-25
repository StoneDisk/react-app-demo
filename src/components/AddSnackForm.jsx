import { useState } from "react";
import SnackList from "./SnackList";

function AddSnackForm() {
  const [brandName, setBrandName] = useState("");
  const [flavor, setFlavor] = useState("");
  const [mainIngredient, setMainIngredient] = useState("");

  function handleFormSubmission(event) {
    event.preventDefault();
    console.log("form submitted successfully!");
  }

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
      <SnackList />
    </div>
  );
}

export default AddSnackForm;
