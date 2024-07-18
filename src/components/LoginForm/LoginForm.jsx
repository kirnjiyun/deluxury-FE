import React, { useState } from "react";
import { useLoginMutation } from "../../hooks/useLoginMutation";
import { LoginFormContainer, Input, Button } from "./LoginFormStyles";

export default function LoginForm({ setUser }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { mutate, error } = useLoginMutation();

    const handleLogin = (e) => {
        e.preventDefault();
        const user = { email, password };
        mutate(user, {
            onSuccess: (data) => {
                setUser(data.user);
            },
        });
    };

    return (
        <LoginFormContainer>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <form onSubmit={handleLogin}>
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
                <Button type="submit">로그인</Button>
            </form>
        </LoginFormContainer>
    );
}
