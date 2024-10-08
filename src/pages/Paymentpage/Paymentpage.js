import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGetCart } from "../../hooks/useCart";
import { useAddToOrder } from "../../hooks/useOrder";
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
import PostCode from "../../components/PostCode/PostCode";

const PaymentPage = () => {
    const navigate = useNavigate();
    const { data: cartList, isLoading, error } = useGetCart();
    const addToOrder = useAddToOrder();
    const [address, setAddress] = useState("");
    const [zip, setZip] = useState("");

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
        detail: "",
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
        setShipInfo((prevInfo) => ({
            ...prevInfo,
            address,
            zip,
        }));
    }, [address, zip]);

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
        const { Name, address, detail, zip, contact } = shipInfo;
        const newErrors = {};

        if (!Name) newErrors.Name = "이름을 입력해주세요.";
        if (!address) newErrors.address = "주소를 입력해주세요.";
        if (!detail) newErrors.detail = "상세주소를 입력해주세요.";
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
                shipTo: { address, detail, zip },
                contact: { Name, lastName: "", contact },
                orderList: cartList.map((item) => ({
                    productId: item.productId._id,
                    price: item.productId.price,
                    qty: item.qty,
                    size: item.size,
                })),
            };

            console.log("Submitting order data:", data); // 디버깅용 로그 추가
            addToOrder.mutate(data, {
                onSuccess: (response) => {
                    console.log("Order submitted successfully", response); // 디버깅용 로그 추가
                    navigate(`/payment/success?orderNum=${response.orderNum}`);
                },
                onError: (error) => {
                    console.error("Error submitting order:", error); // 디버깅용 로그 추가
                },
            });
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
                        />
                        {errors.Name && (
                            <ErrorMessage>{errors.Name}</ErrorMessage>
                        )}
                    </InputGroup>
                    <InputGroup>
                        <Label>연락처</Label>
                        <Input
                            type="text"
                            name="contact"
                            value={shipInfo.contact}
                            onChange={handleFormChange}
                            required
                        />
                        {errors.contact && (
                            <ErrorMessage>{errors.contact}</ErrorMessage>
                        )}
                    </InputGroup>
                    <InputGroup>
                        <Label>
                            우편번호
                            <PostCode setAddress={setAddress} setZip={setZip} />
                        </Label>

                        <Input
                            type="text"
                            name="zip"
                            value={shipInfo.zip}
                            onChange={handleFormChange}
                            required
                            readOnly
                        />
                        {errors.zip && (
                            <ErrorMessage>{errors.zip}</ErrorMessage>
                        )}
                    </InputGroup>
                    <InputGroup>
                        <Label>주소</Label>
                        <Input
                            type="text"
                            name="address"
                            value={shipInfo.address}
                            onChange={handleFormChange}
                            required
                            readOnly
                        />
                        {errors.address && (
                            <ErrorMessage>{errors.address}</ErrorMessage>
                        )}
                    </InputGroup>
                    <InputGroup>
                        <Label>상세주소</Label>
                        <Input
                            type="text"
                            name="detail"
                            value={shipInfo.detail}
                            onChange={handleFormChange}
                            required
                        />
                        {errors.detail && (
                            <ErrorMessage>{errors.detail}</ErrorMessage>
                        )}
                    </InputGroup>
                    <Button type="submit" disabled={!isFormValid}>
                        결제하기
                    </Button>
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
                        <span>${totalPrice}</span>{" "}
                    </SummaryItem>{" "}
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
