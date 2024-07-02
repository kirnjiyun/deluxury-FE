// src/components/CartSummary/CartSummary.js
import React from "react";
import {
    SummaryContainer,
    SummaryRow,
    SummaryItem,
    TotalItem,
} from "./cartSummaryStyles";

export default function CartSummary({
    totalAmount,
    totalShipping,
    totalPayment,
}) {
    return (
        <SummaryContainer>
            <SummaryRow>
                <SummaryItem>총 주문금액</SummaryItem>
                <SummaryItem>총 배송비</SummaryItem>
                <SummaryItem>총 결제금액</SummaryItem>
            </SummaryRow>
            <SummaryRow>
                <TotalItem>${totalAmount}</TotalItem>
                <SummaryItem>+</SummaryItem>
                <TotalItem>${totalShipping}</TotalItem>
                <SummaryItem>=</SummaryItem>
                <TotalItem>${totalPayment}</TotalItem>
            </SummaryRow>
        </SummaryContainer>
    );
}
