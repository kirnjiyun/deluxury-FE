import React, { useState } from "react";
import {
    OrderItem,
    OrderContainer,
    OrderInfo,
    OrderDetailItem,
    Label,
    Value,
} from "./OrderListStyles";
import OrderModal from "../OrderModal/OrderModal";

export default function OrderList({ data, isAdmin }) {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState(null);
    const getTotalPrice = (items) => {
        return items
            .reduce(
                (total, item) => total + (item.price || 0) * (item.qty || 0),
                0
            )
            .toFixed(2);
    };

    const openModal = (order) => {
        setSelectedOrder(order);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setSelectedOrder(null);
        setModalIsOpen(false);
    };
    return (
        <>
            <OrderContainer>
                {data?.data && data.data.length > 0 ? (
                    data.data.map((order) => (
                        <OrderItem
                            key={order._id}
                            onClick={() => openModal(order)}
                        >
                            <OrderInfo>
                                <OrderDetailItem>
                                    <Label>주문 번호:</Label>
                                    <Value>{order.orderNum}</Value>
                                </OrderDetailItem>{" "}
                                <OrderDetailItem>
                                    <Label>주문 상태:</Label>
                                    <Value>{order.status}</Value>
                                </OrderDetailItem>
                                <OrderDetailItem>
                                    <Label>주문 날짜:</Label>
                                    <Value>
                                        {new Date(
                                            order.createdAt
                                        ).toLocaleDateString()}
                                    </Value>
                                </OrderDetailItem>{" "}
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

            {selectedOrder && (
                <OrderModal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    order={selectedOrder}
                    isAdmin={true}
                />
            )}
        </>
    );
}
