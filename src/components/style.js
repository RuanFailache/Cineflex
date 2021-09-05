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
    font-weight: ${(props) => props.weight};
    letter-spacing: 4%;
    color: ${(props) => props.color};
    text-align: center;
  }
`;

const Container = styled.div`
  width: 320px;
  margin: 0 auto;
`;

const Footer = styled.footer`
  position: fixed;
  width: 100%;
  height: 117px;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  background-color: #dfe6ed;
  border-top: solid 1px #9eadba;

  p {
    font-size: 20px;
    line-height: 24px;
    font-weight: 400;
    color: #293845;
  }
`;

const Frame = styled.div`
  width: 64px;
  height: 89px;
  padding: 8px;
  background-color: white;
  box-shadow: 0 2px 4px 2px rgba(0, 0, 0, 0.1);

  img {
    display: block;
    width: 48px;
    object-fit: cover;
  }
`;

const FlexBottom = styled.div`
  display: flex;
  align-items: center;
  gap: 22px;
`;

export { Page, Title, Container, Footer, Frame, FlexBottom };
