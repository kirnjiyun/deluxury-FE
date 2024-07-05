import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Container, Message } from "./OrderSuccesspageStyles";
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
            <Message>결제가 완료되었습니다!</Message>
            <svg
                height="200px"
                width="200px"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 17.837 17.837"
                xmlSpace="preserve"
                fill="#000000"
            >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                    <g>
                        <path
                            style={{ fill: "#030104" }}
                            d="M16.145,2.571c-0.272-0.273-0.718-0.273-0.99,0L6.92,10.804l-4.241-4.27
                            c-0.272-0.274-0.715-0.274-0.989,0L0.204,8.019c-0.272,0.271-0.272,0.717,0,0.99l6.217,6.258
                            c0.272,0.271,0.715,0.271,0.99,0L17.63,5.047c0.276-0.273,0.276-0.72,0-0.994L16.145,2.571z"
                        ></path>
                    </g>
                </g>
            </svg>

            {orderNum && (
                <Message
                    onClick={openModal}
                    style={{
                        cursor: "pointer",
                        textDecoration: "underline",
                        color: "blue",
                    }}
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
