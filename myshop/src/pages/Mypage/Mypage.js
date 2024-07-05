import React, { useState } from "react";
import { useGetOrder } from "../../hooks/useOrder";
import {
    Container,
    Title,
    OrderList,
    OrderItem,
    OrderInfo,
    OrderDetailItem,
    Label,
    Value,
} from "./MypageStyles";
import OrderModal from "../../components/OrderModal/OrderModal";
export default function Mypage() {
    const { data: orders, isLoading, error } = useGetOrder();
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState(null);

    const openModal = (order) => {
        setSelectedOrder(order);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setSelectedOrder(null);
        setModalIsOpen(false);
    };

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error fetching orders</div>;

    const getTotalPrice = (items) =>
        items.reduce((total, item) => total + item.price * item.qty, 0);

    return (
        <Container>
            <Title>내 주문내역</Title>
            <OrderList>
                {orders && orders.length > 0 ? (
                    orders.map((order) => (
                        <OrderItem
                            key={order._id}
                            onClick={() => openModal(order)}
                        >
                            <OrderInfo>
                                <OrderDetailItem>
                                    <Label>주문 번호:</Label>
                                    <Value>{order._id}</Value>
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
                                    <Label>합계</Label>
                                    <Value>${getTotalPrice(order.items)}</Value>
                                </OrderDetailItem>
                            </OrderInfo>
                        </OrderItem>
                    ))
                ) : (
                    <div>No orders found.</div>
                )}
            </OrderList>

            {selectedOrder && (
                <OrderModal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    order={selectedOrder}
                />
            )}
        </Container>
    );
}
