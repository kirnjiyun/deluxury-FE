import React from "react";
import {
    OrderItem,
    OrderContainer,
    OrderInfo,
    OrderDetailItem,
    Label,
    Value,
} from "./OrderListStyles";

export default function OrderList({ data }) {
    const getTotalPrice = (items) => {
        return items
            .reduce(
                (total, item) => total + (item.price || 0) * (item.qty || 0),
                0
            )
            .toFixed(2);
    };

    return (
        <OrderContainer>
            {data?.data && data.data.length > 0 ? (
                data.data.map((order) => (
                    <OrderItem key={order._id}>
                        <OrderInfo>
                            <OrderDetailItem>
                                <Label>주문 번호:</Label>
                                <Value>{order.orderNum}</Value>
                            </OrderDetailItem>
                            <OrderDetailItem>
                                <Label>주문 날짜:</Label>
                                <Value>
                                    {new Date(
                                        order.createdAt
                                    ).toLocaleDateString()}
                                </Value>
                            </OrderDetailItem>
                            <OrderDetailItem>
                                <Label>주문 품목 개수:</Label>
                                <Value>{order.items.length}</Value>
                            </OrderDetailItem>
                            <OrderDetailItem>
                                <Label>합계:</Label>
                                <Value>${getTotalPrice(order.items)}</Value>
                            </OrderDetailItem>
                        </OrderInfo>
                    </OrderItem>
                ))
            ) : (
                <div> 주문 목록이 없습니다.</div>
            )}
        </OrderContainer>
    );
}
