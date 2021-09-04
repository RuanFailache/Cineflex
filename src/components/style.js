import styled from "styled-components";

const Page = styled.section`
    margin-top: 67px;
`;

const Title = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;

    h2 {
        font-size: 24px;
        line-height: 28px;
        font-weight: 400;
        letter-spacing: 4%;
        color: #293845;
    }
`;

const Container = styled.div`
    width: 320px;
    margin: 0 auto;
`;

export {
    Page,
    Title,
    Container
}