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

export default function CartCard() {
    return (
        <Card>
            <ItemDetails>
                <ItemInfo>
                    <ItemName>[OAT] Bottle Linen Slit Blouse - Ivory</ItemName>
                    <ItemPrice>52,000원</ItemPrice>
                </ItemInfo>
                <QuantityControls>
                    <QuantityButton>-</QuantityButton>
                    <QuantityDisplay>1</QuantityDisplay>
                    <QuantityButton>+</QuantityButton>
                </QuantityControls>
            </ItemDetails>
        </Card>
    );
}
