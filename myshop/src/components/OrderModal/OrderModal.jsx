import React from "react";
import Modal from "react-modal";
import {
    ModalContent,
    CloseButton,
    OrderDetailItem,
    Label,
    Value,
    ProductImage,
    ModalHeader,
    ModalSection,
    SectionTitle,
    SectionContent,
    Info,
} from "./OrderModalStyles";

Modal.setAppElement("#root");

const OrderModal = ({ isOpen, onRequestClose, order }) => {
    const calculateTotalPrice = (items) => {
        return items.reduce((total, item) => total + item.price * item.qty, 0);
    };
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="modal-overlay"
            className="modal-content"
        >
            <ModalContent>
                <ModalHeader>
                    <CloseButton onClick={onRequestClose}>×</CloseButton>
                </ModalHeader>
                <ModalSection>
                    <SectionTitle>주문 정보</SectionTitle>
                    <SectionContent>
                        <OrderDetailItem>
                            <Label>주문 번호:</Label>
                            <Value>{order._id}</Value>
                        </OrderDetailItem>
                        <OrderDetailItem>
                            <Label>주문 일자:</Label>
                            <Value>
                                {new Date(order.createdAt).toLocaleDateString()}
                            </Value>
                        </OrderDetailItem>
                    </SectionContent>
                </ModalSection>
                <ModalSection>
                    <SectionTitle>상품 정보</SectionTitle>
                    <SectionContent>
                        {order.items.map((item) => (
                            <OrderDetailItem key={item._id}>
                                <ProductImage
                                    src={item.productId.image}
                                    alt={item.productId.name}
                                />
                                <Info>
                                    {" "}
                                    <Label>제품 이름:</Label>
                                    <Value>{item.productId.name}</Value>
                                    <Label>가격:</Label>
                                    <Value>${item.price}</Value>
                                    <Label>수량:</Label>
                                    <Value>{item.qty}</Value>
                                    <Label>사이즈:</Label>
                                    <Value>{item.size}</Value>
                                </Info>
                            </OrderDetailItem>
                        ))}
                    </SectionContent>
                </ModalSection>
                <ModalSection>
                    <SectionTitle>배송 정보</SectionTitle>
                    <SectionContent>
                        <OrderDetailItem>
                            <Label>수령인:</Label>
                            <Value>{order.contact.Name}</Value>
                        </OrderDetailItem>
                        <OrderDetailItem>
                            <Label>휴대폰:</Label>
                            <Value>{order.contact.contact}</Value>
                        </OrderDetailItem>
                        <OrderDetailItem>
                            <Label>주소:</Label>
                            <Value>{order.shipTo.address}</Value>
                        </OrderDetailItem>
                        <OrderDetailItem>
                            <Label>배송 메모:</Label>
                            <Value>{order.shipTo.memo}</Value>
                        </OrderDetailItem>
                    </SectionContent>
                </ModalSection>
                <ModalSection>
                    <SectionTitle>결제 내역</SectionTitle>
                    <SectionContent>
                        <OrderDetailItem>
                            <Label>상품 금액:</Label>
                            <Value>${calculateTotalPrice(order.items)}</Value>
                        </OrderDetailItem>
                    </SectionContent>
                </ModalSection>
            </ModalContent>
        </Modal>
    );
};

export default OrderModal;
