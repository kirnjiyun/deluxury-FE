import styled from "@emotion/styled";

export const CarouselContainer = styled.div`
    position: relative;
    width: 100%;
    overflow: hidden;
    height: 600px;
    cursor: pointer;
`;

export const CarouselSlider = styled.div`
    display: flex;
    transition: transform 0.5s ease;
`;

export const CarouselSlide = styled.div`
    flex: 0 0 100%;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(
            90deg,
            rgba(0, 0, 0, 1) 25%,
            transparent 50%,
            rgba(0, 0, 0, 1) 75%
        );
        pointer-events: none;
        z-index: 1;
    }
`;

export const SlideImage = styled.div`
    width: 100%;
    height: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 0;
`;

export const SlideContent = styled.div`
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    z-index: 12;
    background-color: green;
    width: 120px;
    height: 12px;
`;

export const SlideTitle = styled.h3`
    z-index: 12;
    margin: 0;
    font-size: 2rem;
    font-weight: bold;
    color: white;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

export const SlideControls = styled.div`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 0 16px;
    box-sizing: border-box;
`;

export const ControlButton = styled.button`
    background-color: rgba(255, 255, 255, 0.4);
    display: flex;
    border: none;
    width: 40px;
    height: 40px;
    font-size: 24px;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: background-color 0.3s ease;
    border-radius: 50%;
    &:hover {
        background-color: rgba(255, 255, 255, 0.8);
    }
    & > * {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
    }
`;

export const SlideIndicators = styled.div`
    position: absolute;
    bottom: 16px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
`;

export const IndicatorButton = styled.button`
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: ${(props) =>
        props.active ? "rgba(255, 255, 255, 0.8)" : "rgba(255, 255, 255, 0.4)"};
    margin: 0 4px;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease;
`;
