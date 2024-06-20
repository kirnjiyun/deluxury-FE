import React from "react";
import { Container } from "./SignUppageStyles";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
export default function SignUppage() {
    return (
        <Container>
            <h1>회원가입</h1>
            <ProgressBar />
            <SignUpForm />
        </Container>
    );
}
