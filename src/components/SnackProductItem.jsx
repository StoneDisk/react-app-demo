function SnackProductItem({brand_Name, flavor, main_Ingredient}) {
    return (
        <article>
            <h3>{brand_Name}</h3>
            <p>{flavor}</p>
            <p>{main_Ingredient}</p>
        </article>
    );
}

export default SnackProductItem;