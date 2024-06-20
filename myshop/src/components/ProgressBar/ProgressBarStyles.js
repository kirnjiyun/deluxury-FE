import styled from "@emotion/styled";

export const ProgressBarContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    height: 3px;
    width: 300px;
    background: #ddd;
    overflow: hidden;
    position: relative;
`;

export const ProgressBarFill = styled.div`
    height: 100%;
    background: #000;
    transition: width 0.2s ease-in-out;
    width: ${(props) => props.width}%;
    position: absolute;
    top: 0;
    left: 0;
`;

export const StepContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    position: relative;
    z-index: 1;
    p {
        color: transparent;
    }
`;

export const Step = styled.div`
    text-align: center;
    flex: 1;
    color: ${(props) => (props.active ? "#000" : "#ddd")};
`;
