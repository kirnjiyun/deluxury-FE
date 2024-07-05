import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useGetCart } from "../../hooks/useCart";
import PaymentForm from "../../components/PaymentForm/PaymentForm";
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
    ErrorMessage,
} from "./PaymentpageStyles";
const PaymentPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { data: cartList, isLoading, error } = useGetCart();

    const [cardValue, setCardValue] = useState({
        cvc: "",
        expiry: "",
        focus: "",
        name: "",
        number: "",
    });
    const [shipInfo, setShipInfo] = useState({
        Name: "",
        address: "",
        city: "",
        zip: "",
        contact: "",
    });
    const [totalPrice, setTotalPrice] = useState(0);
    const [errors, setErrors] = useState({});
    const [isFormValid, setIsFormValid] = useState(false);

    useEffect(() => {
        if (cartList && cartList.length > 0) {
            const total = cartList.reduce(
                (acc, item) => acc + item.productId.price * item.qty,
                0
            );
            setTotalPrice(total);
        }
    }, [cartList]);

    useEffect(() => {
        const isShipInfoValid = Object.values(shipInfo).every(
            (field) => field.trim() !== ""
        );
        const isCardValueValid = Object.values(cardValue).every(
            (field) => field.trim() !== ""
        );
        setIsFormValid(isShipInfoValid && isCardValueValid);
    }, [shipInfo, cardValue]);

    const handleSubmit = (event) => {
        event.preventDefault();
        const { Name, address, city, zip, contact } = shipInfo;
        const newErrors = {};

        if (!Name) newErrors.Name = "이름을 입력해주세요.";
        if (!address) newErrors.address = "주소를 입력해주세요.";
        if (!city) newErrors.city = "도시를 입력해주세요.";
        if (!zip) newErrors.zip = "우편번호를 입력해주세요.";
        if (!contact) newErrors.contact = "연락처를 입력해주세요.";
        if (!cardValue.name) newErrors.cardName = "카드 이름을 입력해주세요.";
        if (!cardValue.number)
            newErrors.cardNumber = "카드 번호를 입력해주세요.";
        if (!cardValue.expiry)
            newErrors.cardExpiry = "카드 유효기간을 입력해주세요.";
        if (!cardValue.cvc) newErrors.cardCvc = "카드 CVC를 입력해주세요.";

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            const data = {
                totalPrice,
                shipTo: { address, city, zip },
                contact: { Name, lastName: "", contact },
                orderList: cartList.map((item) => ({
                    productId: item.productId._id,
                    price: item.productId.price,
                    qty: item.qty,
                    size: item.size,
                })),
            };
        }
    };

    const handleFormChange = (event) => {
        const { name, value } = event.target;
        setShipInfo({ ...shipInfo, [name]: value });
        setErrors({ ...errors, [name]: "" });
    };

    const handlePaymentInfoChange = (event) => {
        const { name, value } = event.target;
        setCardValue({ ...cardValue, [name]: value });
        setErrors({ ...errors, [name]: "" });
    };

    const handleInputFocus = (e) => {
        setCardValue({ ...cardValue, focus: e.target.name });
    };

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading cart items</div>;

    return (
        <Container>
            <GridContainer>
                <Form onSubmit={handleSubmit}>
                    <h2>배송 정보</h2>
                    <InputGroup>
                        <Label>이름</Label>
                        <Input
                            type="text"
                            name="Name"
                            value={shipInfo.Name}
                            onChange={handleFormChange}
                            required
                            placeholder="김지윤"
                        />
                        {errors.firstName && (
                            <ErrorMessage>{errors.Name}</ErrorMessage>
                        )}
                    </InputGroup>{" "}
                    <InputGroup>
                        <Label>연락처</Label>
                        <Input
                            type="text"
                            name="contact"
                            value={shipInfo.contact}
                            onChange={handleFormChange}
                            required
                            placeholder="01012341234"
                        />
                        {errors.contact && (
                            <ErrorMessage>{errors.contact}</ErrorMessage>
                        )}
                    </InputGroup>{" "}
                    <InputGroup>
                        <Label>우편번호</Label>
                        <Input
                            type="text"
                            name="zip"
                            value={shipInfo.zip}
                            onChange={handleFormChange}
                            required
                            placeholder="54321"
                        />
                        {errors.zip && (
                            <ErrorMessage>{errors.zip}</ErrorMessage>
                        )}
                    </InputGroup>{" "}
                    <InputGroup>
                        <Label>주소</Label>
                        <Input
                            type="text"
                            name="city"
                            value={shipInfo.city}
                            onChange={handleFormChange}
                            required
                        />
                        {errors.city && (
                            <ErrorMessage>{errors.city}</ErrorMessage>
                        )}
                    </InputGroup>
                    <InputGroup>
                        <Label>상세주소</Label>
                        <Input
                            type="text"
                            name="address"
                            value={shipInfo.address}
                            onChange={handleFormChange}
                            required
                        />
                        {errors.address && (
                            <ErrorMessage>{errors.address}</ErrorMessage>
                        )}
                    </InputGroup>
                </Form>

                <Summary>
                    <h2>Order Summary</h2>
                    {cartList.map((item) => (
                        <SummaryItem key={item.productId._id}>
                            <span>{item.productId.name}</span>
                            <span>
                                {item.qty} x ${item.productId.price} ={" "}
                                {item.qty * item.productId.price}
                            </span>
                        </SummaryItem>
                    ))}
                    <SummaryItem>
                        <span>총 결제 금액</span>
                        <span>${totalPrice}</span>
                    </SummaryItem>{" "}
                    <Button type="submit" disabled={!isFormValid}>
                        결제하기
                    </Button>
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
