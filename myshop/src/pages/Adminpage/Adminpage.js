import React, { useState, useEffect } from "react";
import OrderList from "../../components/OrderList/OrderList";
import AdminProductList from "../../components/AdminProductList/AdminProductList";
import {
    Container,
    Sidebar,
    Content,
    Header,
    Section,
    Button,
    PaginationContainer,
} from "./AdminpageStyles";
import ReactPaginate from "react-paginate";
import { useGetOrder } from "../../hooks/useOrder";
import ProductModal from "../../components/ProductModal/ProductModal";

export default function Adminpage() {
    const [selectedSection, setSelectedSection] = useState("orders");
    const [page, setPage] = useState(1);
    const { data, isLoading, error } = useGetOrder(page);
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [productModalIsOpen, setProductModalIsOpen] = useState(false);

    useEffect(() => {
        console.log("Fetching data for page:", page);
    }, [page]);

    const openProductModal = () => {
        console.log("Opening product modal");
        setProductModalIsOpen(true);
    };

    const closeProductModal = () => {
        console.log("Closing product modal");
        setProductModalIsOpen(false);
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
                        <Button onClick={openProductModal}>
                            상품 등록하기
                        </Button>
                    )}
                </Header>
                {selectedSection === "orders" && (
                    <Section>
                        <h2>
                            Order List (관리자는 주문 상태를 바꿀 수 있습니다.)
                        </h2>
                        <OrderList data={data} isAdmin={true} />
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
                        <AdminProductList />
                    </Section>
                )}
            </Content>

            <ProductModal
                isOpen={productModalIsOpen}
                onRequestClose={closeProductModal}
            />
        </Container>
    );
}
