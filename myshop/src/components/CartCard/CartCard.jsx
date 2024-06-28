import React from "react";
import {
    Card,
    ItemDetails,
    ItemInfo,
    ItemName,
    ItemPrice,
    QuantityControls,
    QuantityButton,
    QuantityDisplay,
} from "./CartCardStyles";

const CartCard = ({ item }) => {
    return (
        <Card>
            <ItemDetails>
                <ItemInfo>
                    <ItemName>{item.name}</ItemName>
                    <ItemPrice>{item.price}원</ItemPrice>
                </ItemInfo>
                <QuantityControls>
                    <QuantityButton>-</QuantityButton>
                    <QuantityDisplay>{item.quantity}</QuantityDisplay>
                    <QuantityButton>+</QuantityButton>
                </QuantityControls>
            </ItemDetails>
        </Card>
    );
};

export default CartCard;
