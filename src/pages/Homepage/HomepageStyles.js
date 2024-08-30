import styled from "@emotion/styled";

export const MainContainer = styled.div`
    width: 100%;
    overflow-x: hidden;
`;

export const SnapContainer = styled.div`
    width: 100%;
    height: 100vh;
    overflow-y: auto;
    scroll-snap-type: y mandatory;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
    -ms-overflow-style: none;

    &::-webkit-scrollbar {
        display: none;
    }
`;

export const FullscreenSection = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    scroll-snap-align: start;
`;

export const ContentSection = styled.div`
    width: 100%;
    padding: 20px;
    background: #fff;
    flex-shrink: 0;
`;

export const Title = styled.h1`
    text-align: center;
    margin-top: 20px;
`;

export const Row = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

export const Col = styled.div`
    flex: 1 1 300px;
    max-width: 300px;
    margin: 10px;
`;
