import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { nextStep, prevStep } from "../../action/SignUpAction";
import {
    Title,
    CheckboxLabel,
    Line,
    Input,
    Button,
    LinkButton,
} from "./SignUpFormStyles";
const SignUpForm = () => {
    const step = useSelector((state) => state.step.step);
    const dispatch = useDispatch();
    const [user, setUser] = useState(null);
    const [allChecked, setAllChecked] = useState(false);
    const [termsChecked, setTermsChecked] = useState({
        age: false,
        terms: false,
        privacy: false,
        marketing: false,
        ads: false,
    });

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

            {step == 2 && (
                <>
                    <Button type="button" onClick={() => dispatch(prevStep())}>
                        약관으로 돌아가기
                    </Button>
                    <Title>이름을 입력해주세요</Title>
                    <Input type="text" placeholder="이름" />
                    <Title>로그인에 사용할 이메일을 입력해주세요</Title>
                    <Input type="email" placeholder="Email" />
                    <Title>비밀번호를 입력해주세요</Title>
                    <Input type="password" placeholder="Password" />
                    <Title>비밀번호를 한 번 더 입력해주세요</Title>
                    <Input type="password" placeholder="Confirm Password" />
                    <Button type="button" onClick={() => dispatch(nextStep())}>
                        회원가입하기
                    </Button>
                </>
            )}
            {step == 3 && (
                <>
                    <Title>{user && user.name}님의 가입을 축하합니다.</Title>
                    <LinkButton href="/">메인페이지로 돌아가기</LinkButton>
                </>
            )}
        </form>
    );
};

export default SignUpForm;
