import CreditCard from "../../components/CreditCard/CreditCard";
import React from "react";
import {
    Container,
    Form,
    InputGroup,
    Label,
    Input,
    Button,
    Summary,
    SummaryItem,
    GridContainer,
} from "./PaymentpageStyles";

const PaymentPage = () => {
    return (
        <Container>
            <GridContainer>
                <Form>
                    <h2>배송 정보</h2>
                    <InputGroup>
                        <Label>배송지명</Label>
                        <Input type="text" placeholder="집" />
                    </InputGroup>
                    <InputGroup>
                        <Label>수령인</Label>
                        <Input type="text" placeholder="김지윤" />
                    </InputGroup>
                    <InputGroup>
                        <Label>배송지</Label>
                        <Input type="text" placeholder="13839" />
                        <Input
                            type="text"
                            placeholder="경기도 과천시 원문동 10 과천 위버필드"
                        />
                        <Input type="text" placeholder="204동 2404호" />
                    </InputGroup>
                    <InputGroup>
                        <Label>연락처1</Label>
                        <Input type="text" placeholder="010" />
                        <Input type="text" placeholder="2064" />
                        <Input type="text" placeholder="2187" />
                    </InputGroup>
                </Form>
                <Summary>
                    <h2>결제금액</h2>
                    <SummaryItem>
                        <span>총 상품 금액</span>
                        <span>64,100원</span>
                    </SummaryItem>
                    <SummaryItem>
                        <span>배송비</span>
                        <span>+3,000원</span>
                    </SummaryItem>
                    <SummaryItem>
                        <span>쿠폰 할인 금액</span>
                        <span>-6,410원</span>
                    </SummaryItem>
                    <SummaryItem>
                        <span>총 결제 금액</span>
                        <span>60,690원</span>
                    </SummaryItem>
                    <Button primary>결제하기</Button>
                </Summary>
            </GridContainer>
            <Summary>
                <h2>총 주문 금액</h2>
                <SummaryItem>
                    <span>총 주문금액</span>
                    <span>0원</span>
                </SummaryItem>
                <SummaryItem>
                    <span>총 배송비</span>
                    <span>0원</span>
                </SummaryItem>
                <SummaryItem>
                    <span>총 결제금액</span>
                    <span>0원</span>
                </SummaryItem>
            </Summary>
        </Container>
    );
};

export default PaymentPage;
