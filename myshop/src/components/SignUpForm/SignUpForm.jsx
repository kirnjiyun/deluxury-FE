import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { nextStep, prevStep } from "../../action/SignUpAction";
import { useSignUpMutation } from "../../hooks/useSignUpMutation";
import {
    Title,
    CheckboxLabel,
    Line,
    Input,
    Button,
    LinkButton,
    Error,
    RadioGroup,
    StyledRadioInput,
    RadioLabel,
} from "./SignUpFormStyles";

const SignUpForm = () => {
    const step = useSelector((state) => state.step.step);
    const dispatch = useDispatch();
    const [allChecked, setAllChecked] = useState(false);
    const [termsChecked, setTermsChecked] = useState({
        age: false,
        terms: false,
        privacy: false,
        marketing: false,
        ads: false,
    });
    const [role, setRole] = useState("user");

    useEffect(() => {
        const allChecked = Object.values(termsChecked).every(Boolean);
        setAllChecked(allChecked);
    }, [termsChecked]);

    const handleAllCheck = () => {
        const newValue = !allChecked;
        setAllChecked(newValue);
        setTermsChecked({
            age: newValue,
            terms: newValue,
            privacy: newValue,
            marketing: newValue,
            ads: newValue,
        });
    };

    const handleIndividualCheck = (name) => {
        setTermsChecked((prev) => ({
            ...prev,
            [name]: !prev[name],
        }));
    };

    const canProceed =
        termsChecked.age && termsChecked.terms && termsChecked.privacy;

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [pw, setPw] = useState("");
    const [rePw, setRePw] = useState("");
    const [error, setError] = useState("");

    const isFormFilled = () => {
        return name && email && pw && rePw;
    };

    const mutation = useSignUpMutation();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (pw !== rePw) {
            setError("패스워드가 일치하지 않습니다. 다시 입력해주세요.");
            return;
        }
        const newUser = { name, email, password: pw, role };
        mutation.mutate(newUser, {
            onSuccess: (data) => {
                console.log("User created successfully:", data);
                dispatch(nextStep());
            },
            onError: (error) => {
                setError(error.message || "An error occurred.");
            },
        });
    };

    return (
        <form>
            {step === 1 && (
                <>
                    <Title>이용약관에 동의해주세요</Title>
                    <CheckboxLabel>
                        <input
                            type="checkbox"
                            checked={allChecked}
                            onChange={handleAllCheck}
                        />
                        <span>모두 동의 (선택 정보 포함)</span>
                    </CheckboxLabel>
                    <Line></Line>
                    <CheckboxLabel>
                        <input
                            type="checkbox"
                            checked={termsChecked.age}
                            onChange={() => handleIndividualCheck("age")}
                        />
                        <span>[필수] 만 14세 이상입니다</span>
                    </CheckboxLabel>
                    <CheckboxLabel>
                        <input
                            type="checkbox"
                            checked={termsChecked.terms}
                            onChange={() => handleIndividualCheck("terms")}
                        />
                        <span>[필수] 이용약관에 동의합니다</span>
                        <a href="#">보기</a>
                    </CheckboxLabel>
                    <CheckboxLabel>
                        <input
                            type="checkbox"
                            checked={termsChecked.privacy}
                            onChange={() => handleIndividualCheck("privacy")}
                        />
                        <span>[필수] 개인정보 처리방침에 동의합니다</span>
                        <a href="#">보기</a>
                    </CheckboxLabel>
                    <CheckboxLabel>
                        <input
                            type="checkbox"
                            checked={termsChecked.marketing}
                            onChange={() => handleIndividualCheck("marketing")}
                        />
                        <span>[선택] 마케팅 정보 수신에 동의합니다</span>
                        <a href="#">보기</a>
                    </CheckboxLabel>
                    <CheckboxLabel>
                        <input
                            type="checkbox"
                            checked={termsChecked.ads}
                            onChange={() => handleIndividualCheck("ads")}
                        />
                        <span>[선택] 광고성 정보 수신에 동의합니다</span>
                        <a href="#">보기</a>
                    </CheckboxLabel>
                    <Button
                        type="button"
                        onClick={() => dispatch(nextStep())}
                        disabled={!canProceed}
                    >
                        다음
                    </Button>
                </>
            )}

            {step === 2 && (
                <>
                    <Button type="button" onClick={() => dispatch(prevStep())}>
                        약관으로 돌아가기
                    </Button>
                    <Title>이름을 입력해주세요</Title>
                    <Input
                        type="text"
                        placeholder="이름"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <Title>로그인에 사용할 이메일을 입력해주세요</Title>
                    <Input
                        type="email"
                        placeholder="이메일"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Title>비밀번호를 입력해주세요</Title>
                    <Input
                        type="password"
                        placeholder="비밀번호"
                        value={pw}
                        onChange={(e) => setPw(e.target.value)}
                    />
                    <Title>비밀번호를 한 번 더 입력해주세요</Title>
                    <Input
                        type="password"
                        placeholder="비밀번호 확인"
                        value={rePw}
                        onChange={(e) => setRePw(e.target.value)}
                    />
                    <Title>구매자 또는 판매자 역할을 선택해주세요</Title>
                    <RadioGroup>
                        <StyledRadioInput
                            type="radio"
                            id="user"
                            name="role"
                            value="user"
                            checked={role === "user"}
                            onChange={(e) => setRole(e.target.value)}
                        />
                        <RadioLabel htmlFor="user">구매자</RadioLabel>
                    </RadioGroup>
                    <RadioGroup>
                        <StyledRadioInput
                            type="radio"
                            id="admin"
                            name="role"
                            value="admin"
                            checked={role === "admin"}
                            onChange={(e) => setRole(e.target.value)}
                        />
                        <RadioLabel htmlFor="admin">판매자</RadioLabel>
                    </RadioGroup>
                    {error && <Error>{error}</Error>}
                    <Button
                        type="button"
                        onClick={handleSubmit}
                        disabled={!isFormFilled()}
                    >
                        회원가입하기
                    </Button>
                </>
            )}
            {step === 3 && (
                <>
                    <Title>{name}님의 가입을 축하합니다.</Title>
                    <LinkButton href="/">메인페이지로 돌아가기</LinkButton>
                </>
            )}
        </form>
    );
};

export default SignUpForm;
