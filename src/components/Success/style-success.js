import styled from "styled-components";

const Infos = styled.div`
  margin-top: 30px;
  color: #293845;

  h3 {
    font-size: 24px;
    line-height: 28px;
    letter-spacing: 4%;
    font-weight: 700;
  }

  p {
    font-size: 22px;
    line-height: 26px;
    font-weight: 400;
    letter-spacing: 4%;
  }
`;

const ToHome = styled.button`
  width: 225px;
  height: 42px;
  border-radius: 3px;
  border: none;
  background-color: #e8833a;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  margin: 60px auto 15px;
  font-size: 18px;
  line-height: 21px;
  font-weight: 400;
  letter-spacing: 4%;
`;

export { Infos, ToHome };
