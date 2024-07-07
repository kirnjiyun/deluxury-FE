import React, { useState, useEffect } from "react";
import OrderList from "../../components/OrderList/OrderList";
// import ProductUpload from "../../components/ProductUpload/ProductUpload";
import {
    Container,
    Sidebar,
    Content,
    Header,
    Section,
    Button,
    PaginationContainer,
} from "./AdminpageStyles";
import OrderModal from "../../components/OrderModal/OrderModal";
import ReactPaginate from "react-paginate";
import { useGetOrder } from "../../hooks/useOrder";

export default function Adminpage() {
    const [selectedSection, setSelectedSection] = useState("orders");
    const [page, setPage] = useState(1);
    const { data, isLoading, error } = useGetOrder(page);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState(null);

    useEffect(() => {
        console.log("Fetching data for page:", page);
    }, [page]);

    const openModal = (order) => {
        console.log("Opening modal for order:", order);
        setSelectedOrder(order);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        console.log("Closing modal");
        setSelectedOrder(null);
        setModalIsOpen(false);
    };

    const handlePageClick = (event) => {
        console.log("Page clicked:", event.selected + 1);
        setPage(event.selected + 1);
    };

    if (isLoading) {
        console.log("Loading data...");
        return <div>Loading...</div>;
    }

    if (error) {
        console.error("Error fetching orders:", error);
        return <div>Error fetching orders</div>;
    }

    const getTotalPrice = (items) => {
        const total = items.reduce(
            (total, item) => total + (item.price || 0) * (item.qty || 0),
            0
        );
        console.log("Calculating total price:", total);
        return total.toFixed(2);
    };

    return (
        <Container>
            <Sidebar>
                <h1>관리자 페이지</h1>

                <ul>
                    <li onClick={() => setSelectedSection("orders")}>
                        주문/배송
                    </li>
                    <li onClick={() => setSelectedSection("products")}>상품</li>
                </ul>
            </Sidebar>
            <Content>
                <Header>
                    {selectedSection === "products" && (
                        <Button>상품 등록하기</Button>
                    )}
                </Header>
                {selectedSection === "orders" && (
                    <Section>
                        <h2>Order List</h2>
                        <OrderList
                            data={data}
                            openModal={openModal}
                            getTotalPrice={getTotalPrice}
                            isAdmin={true}
                        />
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
                    </Section>
                )}
                {selectedSection === "products" && (
                    <Section>
                        <h2>Product Upload</h2>
                        {/* <ProductUpload /> */}
                    </Section>
                )}
            </Content>
        </Container>
    );
}
