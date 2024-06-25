import styled from "@emotion/styled";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    overflow-y: scroll;
    scroll-snap-type: y mandatory;
    -webkit-overflow-scrolling: touch; /* iOS에서 부드러운 스크롤 */
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
