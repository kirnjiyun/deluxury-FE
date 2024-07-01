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
import { useNavigate } from "react-router-dom";
import Toast from "../Toast/Toast";

const CartCard = ({ item }) => {
    const deleteMutation = useDeleteFromCart();
    const updateQuantityMutation = useUpdateCartItemQty();
    const navigate = useNavigate();
    const handleRemove = () => {
        deleteMutation.mutate(item._id, {
            context: { deletedItem: item },
        });
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

    const handleClick = () => {
        const { bigCategory, category, _id } = item.productId;
        navigate(
            `/${bigCategory.toLowerCase()}/${category.main.toLowerCase()}/${category.sub.toLowerCase()}/${_id}`
        );
    };
    return (
        <Card>
            <Toast />
            <RemoveButton onClick={handleRemove}>×</RemoveButton>
            <ItemDetails>
                <ItemImage
                    onClick={handleClick}
                    src={item.productId.image}
                    alt={item.productId.name}
                />
                <ItemInfo>
                    <ItemName onClick={handleClick}>
                        {item.productId.name}{" "}
                    </ItemName>
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
