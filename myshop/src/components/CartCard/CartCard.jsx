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
import { useNavigate } from "react-router-dom";
import Toast from "../Toast/Toast";
import { notify } from "../Toast/Toast";

const CartCard = ({ item, onQuantityChange }) => {
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
            if (newQuantity > item.productId.stock) {
                notify(
                    `재고가 부족합니다. 최대 재고: ${item.productId.stock}개`
                );
                return;
            }
            updateQuantityMutation.mutate(
                { id: item._id, qty: newQuantity },
                {
                    onError: (error) => {
                        notify(
                            `수량 업데이트 실패: ${error.response.data.error}`
                        );
                    },
                    onSuccess: () => {
                        onQuantityChange(item.productId._id, newQuantity);
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

    const totalItemPrice = (item.qty * item.productId.price).toFixed(2);

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
                <ItemPrice>${totalItemPrice}</ItemPrice>
            </ItemDetails>
        </Card>
    );
};

export default CartCard;
