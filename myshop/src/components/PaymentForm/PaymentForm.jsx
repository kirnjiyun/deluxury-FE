/** @jsxImportSource @emotion/react */
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
                                onChange={handlePaymentInfoChange}
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
                                onChange={handlePaymentInfoChange}
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
                                        onChange={handlePaymentInfoChange}
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
                                        onChange={handlePaymentInfoChange}
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
