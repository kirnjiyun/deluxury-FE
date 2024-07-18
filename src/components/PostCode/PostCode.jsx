import React, { useEffect, useState, useRef, useCallback } from "react";
import {
    Container,
    AddressChangeContainer,
    ChangeButton,
    PostcodeWidget,
} from "./PostCodeStyles";

export default function PostCode({ setAddress, setZip }) {
    const [isPostcodeOpen, setIsPostcodeOpen] = useState(false);
    const elementRef = useRef(null);

    useEffect(() => {
        const script = document.createElement("script");
        script.src =
            "//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    const togglePostcode = useCallback(() => {
        setIsPostcodeOpen((prev) => !prev);
    }, []);

    useEffect(() => {
        if (isPostcodeOpen && elementRef.current) {
            new window.daum.Postcode({
                oncomplete: (data) => {
                    let fullAddress = data.address;
                    const extraAddress = data.extraAddress
                        ? ` (${data.extraAddress})`
                        : "";
                    if (data.userSelectedType === "R") {
                        fullAddress += extraAddress;
                    }
                    setAddress(fullAddress);
                    setZip(data.zonecode);
                    togglePostcode();
                },
                width: "100%",
                height: "400px",
            }).embed(elementRef.current);
        } else if (elementRef.current) {
            elementRef.current.innerHTML = "";
        }
    }, [isPostcodeOpen, setAddress, setZip, togglePostcode]);

    return (
        <Container>
            <AddressChangeContainer>
                <ChangeButton onClick={togglePostcode}>
                    지역 선택{" "}
                    <span
                        className={`arrow ${isPostcodeOpen ? "rotated" : ""}`}
                    >
                        {"▾"}
                    </span>
                </ChangeButton>
            </AddressChangeContainer>
            <PostcodeWidget
                className={isPostcodeOpen ? "open" : ""}
                ref={elementRef}
            ></PostcodeWidget>
        </Container>
    );
}
