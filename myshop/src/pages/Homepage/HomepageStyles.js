import styled from "@emotion/styled";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    overflow-y: scroll;
    scroll-snap-type: y mandatory;
    -webkit-overflow-scrolling: touch; /* iOS에서 부드러운 스크롤 */
`;

export const FullscreenSection = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    scroll-snap-align: start;
    overflow: hidden;
`;

export const ContentSection = styled.div`
    width: 100%;
    padding: 20px;
    background: #fff;
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
