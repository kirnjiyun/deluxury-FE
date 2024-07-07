import React, { useState, useEffect } from "react";
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
    InlineContainer,
    StatusDropdown,
} from "./OrderModalStyles";
import { useUpdateOrderStatus } from "../../hooks/useOrder";

Modal.setAppElement("#root");

const OrderModal = ({ isOpen, onRequestClose, order, isAdmin }) => {
    const { mutate: updateOrderStatus } = useUpdateOrderStatus();
    const [selectedStatus, setSelectedStatus] = useState(order?.status);

    useEffect(() => {
        setSelectedStatus(order?.status);
    }, [order]);

    const handleStatusChange = (event) => {
        setSelectedStatus(event.target.value);
        updateOrderStatus({ id: order._id, status: event.target.value });
    };

    const calculateTotalPrice = (items) => {
        return items
            ?.reduce((total, item) => total + item?.price * item?.qty, 0)
            .toFixed(2);
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
                    <InlineContainer>
                        <SectionTitle>
                            주문 정보
                            {isAdmin ? (
                                <StatusDropdown
                                    value={selectedStatus}
                                    onChange={handleStatusChange}
                                >
                                    <option value="준비중">준비중</option>
                                    <option value="배송중">배송중</option>
                                    <option value="배송완료">배송완료</option>
                                    <option value="반품완료">반품완료</option>
                                </StatusDropdown>
                            ) : (
                                <Value>{order?.status}</Value>
                            )}
                        </SectionTitle>
                    </InlineContainer>
                    <SectionContent>
                        <OrderDetailItem>
                            <Label>주문 번호:</Label>
                            <Value>{order?.orderNum}</Value>
                        </OrderDetailItem>
                        <OrderDetailItem>
                            <Label>주문 일자:</Label>
                            <Value>
                                {new Date(
                                    order?.createdAt
                                ).toLocaleDateString()}
                            </Value>
                        </OrderDetailItem>
                    </SectionContent>
                </ModalSection>
                <ModalSection>
                    <SectionTitle>상품 정보</SectionTitle>
                    <SectionContent>
                        {order?.items.map((item) => (
                            <OrderDetailItem key={item?._id}>
                                <ProductImage
                                    src={item?.productId.image}
                                    alt={item?.productId.name}
                                />
                                <Info>
                                    <Label>제품 이름:</Label>
                                    <Value>{item?.productId.name}</Value>
                                    <Label>가격:</Label>
                                    <Value>${item?.price}</Value>
                                    <Label>수량:</Label>
                                    <Value>{item?.qty}</Value>
                                    <Label>사이즈:</Label>
                                    <Value>{item?.size}</Value>
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
                            <Value>{order?.contact.Name}</Value>
                        </OrderDetailItem>
                        <OrderDetailItem>
                            <Label>휴대폰:</Label>
                            <Value>{order?.contact.contact}</Value>
                        </OrderDetailItem>
                        <OrderDetailItem>
                            <Label>주소:</Label>
                            <Value>{order?.shipTo.address}</Value>
                        </OrderDetailItem>
                        <OrderDetailItem>
                            <Label>배송 메모:</Label>
                            <Value>{order?.shipTo.memo}</Value>
                        </OrderDetailItem>
                    </SectionContent>
                </ModalSection>
                <ModalSection>
                    <SectionTitle>결제 내역</SectionTitle>
                    <SectionContent>
                        <OrderDetailItem>
                            <Label>상품 금액:</Label>
                            <Value>${calculateTotalPrice(order?.items)}</Value>
                        </OrderDetailItem>
                    </SectionContent>
                </ModalSection>
            </ModalContent>
        </Modal>
    );
};

export default OrderModal;
