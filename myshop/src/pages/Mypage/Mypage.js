import React, { useState } from "react";
import { useGetMyOrder } from "../../hooks/useOrder";
import {
    Container,
    Title,
    OrderList,
    OrderItem,
    OrderInfo,
    OrderDetailItem,
    Label,
    Value,
    PaginationContainer,
} from "./MypageStyles";
import OrderModal from "../../components/OrderModal/OrderModal";
import ReactPaginate from "react-paginate";

export default function Mypage() {
    const [page, setPage] = useState(1);
    const { data, isLoading, error } = useGetMyOrder(page);
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

    const handlePageClick = (event) => {
        setPage(event.selected + 1);
    };

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error fetching orders</div>;

    const getTotalPrice = (items) =>
        items.reduce((total, item) => total + item.price * item.qty, 0);

    return (
        <Container>
            <Title>내 주문내역</Title>
            <OrderList>
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
                    <div>No orders found.</div>
                )}
            </OrderList>

            <PaginationContainer>
                {data?.totalPageNum > 1 ? (
                    <ReactPaginate
                        previousLabel={"Previous"}
                        nextLabel={"Next"}
                        breakLabel={"..."}
                        breakClassName={"break-me"}
                        pageCount={data.totalPageNum}
                        marginPagesDisplayed={1}
                        pageRangeDisplayed={5}
                        onPageChange={handlePageClick}
                        containerClassName={"pagination"}
                        subContainerClassName={"pages pagination"}
                        activeClassName={"active"}
                    />
                ) : (
                    <div className="pagination single-page">
                        <span className="previous">Previous</span>
                        <span className="page-num">1</span>
                        <span className="next">Next</span>
                    </div>
                )}
            </PaginationContainer>

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
