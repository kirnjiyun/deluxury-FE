import React from "react";
import { css } from "@emotion/react";
import Cards from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";

import {
    Form,
    Row,
    Col,
    FormGroup,
    FormLabel,
    FormControl,
} from "./PaymentFormStyles";

const PaymentForm = ({
    handleInputFocus,
    cardValue = { cvc: "", expiry: "", focus: "", name: "", number: "" },
    handlePaymentInfoChange,
}) => {
    const handleNumberInputChange = (e) => {
        const { value, name } = e.target;

        const regex = /^[0-9]*$/;

        if (regex.test(value)) {
            handlePaymentInfoChange(e);
        }
    };

    const handleNameInputChange = (e) => {
        const { value } = e.target;

        const regex = /^[A-Za-z\s]*$/;

        if (regex.test(value)) {
            handlePaymentInfoChange(e);
        }
    };

    return (
        <Form>
            <Row>
                <Col>
                    <Cards
                        cvc={cardValue.cvc}
                        expiry={cardValue.expiry}
                        focused={cardValue.focus}
                        name={cardValue.name}
                        number={cardValue.number}
                    />
                </Col>
                <Col>
                    <div
                        css={css`
                            padding: 1rem;
                        `}
                    >
                        <FormGroup>
                            <FormLabel>카드번호</FormLabel>
                            <FormControl
                                type="text"
                                name="number"
                                onChange={handleNumberInputChange}
                                onFocus={handleInputFocus}
                                required
                                maxLength={16}
                                value={cardValue.number}
                            />
                        </FormGroup>

                        <FormGroup>
                            <FormLabel>성명</FormLabel>
                            <FormControl
                                type="text"
                                name="name"
                                onChange={handleNameInputChange}
                                onFocus={handleInputFocus}
                                required
                                value={cardValue.name}
                            />
                        </FormGroup>

                        <Row>
                            <Col>
                                <FormGroup>
                                    <FormLabel>만료일</FormLabel>
                                    <FormControl
                                        type="text"
                                        name="expiry"
                                        placeholder="MM/YY"
                                        onChange={handleNumberInputChange}
                                        onFocus={handleInputFocus}
                                        required
                                        value={cardValue.expiry}
                                        maxLength={5}
                                    />
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup>
                                    <FormLabel>CVC</FormLabel>
                                    <FormControl
                                        type="text"
                                        name="cvc"
                                        placeholder="CVC"
                                        onChange={handleNumberInputChange}
                                        onFocus={handleInputFocus}
                                        required
                                        maxLength={3}
                                        value={cardValue.cvc}
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        </Form>
    );
};

export default PaymentForm;
