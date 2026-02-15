import styled from "@emotion/styled";

export const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  height: 600px;
  @media (max-width: 768px) {
    height: 400px;
  }
  @media (max-width: 480px) {
    height: 280px;
  }
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

export const SlideContent = styled.div`
    position: absolute;
    top: 30px;
    left: 30%;
    transform: translateX(-50%);
    text-align: center;
    z-index: 2;
`;

export const SlideTitle = styled.h3`
    z-index: 2;
    margin: 0;
    font-size: 3em;
    letter-spacing: 5px;
    font-weight: bolder;
    color: white;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 1);
`;

export const SlideImage = styled.div`
  width: 100%;
  height: 100%;
  min-height: 200px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 0;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const AdBadge = styled.div`
    position: absolute;
    top: 10px;
    right: 10px;
    background: transparent;
    color: white;
    border: 1px solid white;
    border-radius: 0;
    padding: 5px 10px;
    font-size: 12px;
    z-index: 2;
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
    background-color: transparent;
`;

export const ControlButton = styled.button`
  background-color: transparent;
  color: white;
  display: flex;
  border: none;
  min-width: 44px;
  min-height: 44px;
  width: 44px;
  height: 44px;
  font-size: 24px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
  & > * {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }
  @media (max-width: 480px) {
    min-width: 40px;
    min-height: 40px;
    width: 40px;
    height: 40px;
    font-size: 20px;
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
    background-color: ${(props) =>
        props.active ? "rgba(255, 255, 255, 0.3)" : "rgba(255, 255, 255, 0.1)"};
    margin: 0 4px;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease;
`;
