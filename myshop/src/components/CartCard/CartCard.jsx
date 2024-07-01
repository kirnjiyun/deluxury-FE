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
import { useDeleteFromCart, useUpdateCartItemQty } from "../../hooks/useCart";
import { toast } from "react-toastify";

const CartCard = ({ item }) => {
    const mutation = useDeleteFromCart();
    const updateQuantityMutation = useUpdateCartItemQty();

    const handleRemove = () => {
        mutation.mutate(item._id);
    };
    const handleQuantityChange = (change) => {
        const newQuantity = item.qty + change;
        if (newQuantity > 0) {
            updateQuantityMutation.mutate(
                { id: item._id, qty: newQuantity },
                {
                    onError: (error) => {
                        alert(error.response.data.error);
                    },
                }
            );
        }
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
                        <QuantityButton
                            onClick={() => handleQuantityChange(-1)}
                        >
                            -
                        </QuantityButton>
                        <QuantityDisplay>{item.qty}</QuantityDisplay>
                        <QuantityButton onClick={() => handleQuantityChange(1)}>
                            +
                        </QuantityButton>
                    </QuantityControls>
                </ItemInfo>
                <ItemPrice>${item.productId.price}</ItemPrice>
            </ItemDetails>
        </Card>
    );
};

export default CartCard;
