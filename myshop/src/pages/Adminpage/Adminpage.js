import React, { useState } from "react";
import OrderList from "../../components/OrderList/OrderList";
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

export default function Adminpage() {
    const [selectedSection, setSelectedSection] = useState("orders");
    const [page, setPage] = useState(1);
    const { data, isLoading, error } = useGetOrder(page);

    const handlePageClick = (event) => {
        setPage(event.selected + 1);
    };

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error fetching orders</div>;

    return (
        <Container>
            <Sidebar>
                <h1>관리자 페이지</h1>
                <br />
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
                        <OrderList data={data} />
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
