import { useState } from "react";
import "../assets/styles/SnackItems.css";
import { snacks } from "../datasource/snack_data";

function SnackItems() {
    const [snackItems, setSnackItems] = useState(snacks);

    const clearAll = () => {
        setSnackItems([]);
    };

    const removeSingleSnack = (id) => {
        const modifiedSnackItems = snackItems.filter((snackItem) => {
            return snackItem.id !== id;
        });

        setSnackItems(modifiedSnackItems);
    }

    return (
        <ul>
            {snackItems.map((snackItem) => {
                const {id, brand_Name} = snackItem;
                return (
                    <li className="snack-item" key={id}>
                        <h3>{brand_Name}</h3>
                        <button className="remove-btn" type="button" onClick={() => {
                            removeSingleSnack(id);
                        }}>Remove</button>
                    </li>
                );
            })}
            <button className="remove-all-btn" type="button" onClick={clearAll}>Clear All</button>
        </ul>
    );
}

export default SnackItems;