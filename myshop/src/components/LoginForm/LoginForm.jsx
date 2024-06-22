import React, { useState } from "react";
import { useLoginMutation } from "../../hooks/useLoginMutation";
import { LoginFormContainer, Input, Button } from "./LoginFormStyles";

export default function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { mutate, error } = useLoginMutation();

    const handleLogin = (e) => {
        e.preventDefault();
        const user = { email, password };
        mutate(user);
    };

    return (
        <LoginFormContainer>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="button" onClick={handleLogin}>
                로그인
            </Button>
            {/* <p>-sns계정으로 로그인하기-</p> */}
        </LoginFormContainer>
    );
}
