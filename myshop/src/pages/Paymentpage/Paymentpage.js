import PaymentForm from "../../components/PaymentForm/PaymentForm";
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
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
const PaymentPage = () => {
    const dispatch = useDispatch();
    const { cartList } = useSelector((state) => state.cart);
    const [cardValue, setCardValue] = useState({
        cvc: "",
        expiry: "",
        focus: "",
        name: "",
        number: "",
    });
    const navigate = useNavigate();
    const [firstLoading, setFirstLoading] = useState(true);
    const [shipInfo, setShipInfo] = useState({
        firstName: "",
        lastName: "",
        contact: "",
        address: "",
        city: "",
        zip: "",
    });
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        // Logic to run on first load
        if (firstLoading) {
            setFirstLoading(false);
        }
    }, [firstLoading]);

    const handleSubmit = (event) => {
        event.preventDefault();
        const { firstName, lastName, contact, address, city, zip } = shipInfo;
        const data = {
            totalPrice,
            shipTo: { address, city, zip },
            contact: { firstName, lastName, contact },
            orderList: cartList.map((item) => {
                return {
                    productId: item.productId._id,
                    price: item.productId.price,
                    qty: item.qty,
                    size: item.size,
                };
            }),
        };
    };

    const handleFormChange = (event) => {
        const { name, value } = event.target;
        setShipInfo({ ...shipInfo, [name]: value });
    };

    const handlePaymentInfoChange = (event) => {
        const { name, value } = event.target;
        let newValue = value;
        setCardValue({ ...cardValue, [name]: newValue });
    };

    const handleInputFocus = (e) => {
        setCardValue({ ...cardValue, focus: e.target.name });
    };

    return (
        <Container>
            <GridContainer>
                <Form>
                    <h2>배송 정보</h2>
                    <InputGroup>
                        <Label>배송지명</Label>
                        <Input type="text" placeholder="우리집" />
                    </InputGroup>
                    <InputGroup>
                        <Label>수령인</Label>
                        <Input type="text" placeholder="홍길동" />
                    </InputGroup>
                    <InputGroup>
                        <Label>배송지</Label>
                        <Input type="text" placeholder="우편번호" />
                        <Input type="text" placeholder="도시" />
                        <Input type="text" placeholder="111동 11111호" />
                    </InputGroup>
                    <InputGroup>
                        <Label>연락처1</Label>
                        <Input type="text" placeholder="01012341234" />
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
                        <span> 0원</span>
                    </SummaryItem>

                    <SummaryItem>
                        <span>총 결제 금액</span>
                        <span>60,690원</span>
                    </SummaryItem>
                    <Button>결제하기</Button>
                </Summary>
            </GridContainer>
            <PaymentForm
                handleInputFocus={handleInputFocus}
                cardValue={cardValue}
                handlePaymentInfoChange={handlePaymentInfoChange}
            />
        </Container>
    );
};

export default PaymentPage;
