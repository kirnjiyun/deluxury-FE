import React from "react";
import {
    Card,
    ItemDetails,
    ItemInfo,
    ItemName,
    ItemBrand,
    ItemPrice,
    ItemSize,
    ItemImage,
    QuantityControls,
    QuantityButton,
    QuantityDisplay,
    RemoveButton,
} from "./CartCardStyles";
import { useDeleteFromCart } from "../../hooks/useCart";

const CartCard = ({ item }) => {
    const mutation = useDeleteFromCart();

    const handleRemove = () => {
        mutation.mutate(item._id);
    };
    return (
        <Card>
            {" "}
            <RemoveButton onClick={handleRemove}>×</RemoveButton>
            <ItemDetails>
                <ItemImage
                    src={item.productId.image}
                    alt={item.productId.name}
                />
                <ItemInfo>
                    <ItemName>{item.productId.name}</ItemName>
                    <ItemBrand>{item.productId.brand}</ItemBrand>
                    <ItemSize>Size: {item.size}</ItemSize>

                    <QuantityControls>
                        <QuantityButton>-</QuantityButton>
                        <QuantityDisplay>{item.qty}</QuantityDisplay>
                        <QuantityButton>+</QuantityButton>
                    </QuantityControls>
                </ItemInfo>
                <ItemPrice>${item.productId.price}</ItemPrice>
            </ItemDetails>
        </Card>
    );
};

export default CartCard;
