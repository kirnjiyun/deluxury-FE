import {} from "./productCardStyles";
const ProductCard = ({ product }) => {
    return (
        <div>
            {product.name}
            {product.brand}
        </div>
    );
};

export default ProductCard;
