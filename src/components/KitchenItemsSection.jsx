import { useState } from "react";

function KitchenItemsSection() {
    // Individual State Values
    const [itemName, setItemName] = useState("Refrigerator");
    const [itemType, setItemType] = useState("Food Storage");
    const [itemLength, setItemLength] = useState(1680);
    const [itemWidth, setItemWidth] = useState(555);

    // Object State Value
    const [kitchenItem, setKitchenItem] = useState({
        item_name: "Base Cabinet",
        item_type: "Furniture",
        item_length: 1350,
        item_width: 560
    });

    // Event handler for individual state values
    function changeItem() {
        setItemName("Gas Stove");
        setItemType("Cooking");
        setItemLength(370);
        setItemWidth(295);
    }

    // Event handler for an object state value
    function changeKitchenItem() {
        setKitchenItem({
            item_name: "Kitchen Sink",
            item_type: "Fixture",
            item_length: 500,
            item_width: 220
        });
    }

    // Destructured the object
    const {item_name, item_type, item_length, item_width} = kitchenItem;

    return (
        <section>
            <h3>The {item_name}</h3>
            <p>of type {item_type}</p>
            <p>is {item_length}mm long</p>
            <p>and {item_width}mm wide</p>
            <button className="changeItemBtn" type="button" onClick={changeKitchenItem}>Change Item</button>
        </section>
    );
}

export default KitchenItemsSection;