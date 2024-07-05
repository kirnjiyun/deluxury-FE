import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Container, Heading, Message } from "./OrderSuccesspageStyles";
import OrderModal from "../../components/OrderModal/OrderModal";
import { useGetOrderById } from "../../hooks/useOrder";

const useQuery = () => {
    return new URLSearchParams(useLocation().search);
};

export default function OrderSuccessPage() {
    const query = useQuery();
    const orderNum = query.get("orderNum");

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState(null);
    const { data, isLoading, isError } = useGetOrderById(orderNum);

    const openModal = () => {
        if (data) {
            setSelectedOrder(data);
            setIsModalOpen(true);
        }
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedOrder(null);
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error loading order details.</div>;
    }

    return (
        <Container>
            <Heading>Order Success Page</Heading>
            <Message>Your order has been completed successfully!</Message>
            <Message>결제 완료되었습니다</Message>
            {orderNum && (
                <Message
                    onClick={openModal}
                    style={{ cursor: "pointer", textDecoration: "underline" }}
                >
                    Order Number: {orderNum}
                </Message>
            )}
            <OrderModal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                order={selectedOrder}
            />
        </Container>
    );
}
