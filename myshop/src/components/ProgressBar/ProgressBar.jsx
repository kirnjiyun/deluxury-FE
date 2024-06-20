import React from "react";
import { useSelector } from "react-redux";
import {
    ProgressBarContainer,
    ProgressBarFill,
    StepContainer,
    Step,
    Bullet,
} from "./ProgressBarStyles";

const ProgressBar = () => {
    const step = useSelector((state) => state.step.step);

    const calculateWidth = () => {
        switch (step) {
            case 1:
                return 33;
            case 2:
                return 66;
            case 3:
                return 100;
            default:
                return 0;
        }
    };

    return (
        <>
            <ProgressBarContainer>
                <ProgressBarFill width={calculateWidth()} />
                <StepContainer>
                    <Step active={step >= 1}>
                        <p>Terms</p>
                    </Step>
                    <Step active={step >= 2}>
                        <p>Email</p>
                    </Step>
                    <Step active={step >= 3}>
                        <p>Password</p>
                    </Step>
                </StepContainer>
            </ProgressBarContainer>
        </>
    );
};

export default ProgressBar;
