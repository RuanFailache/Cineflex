import styled from "styled-components";

const Flex = styled.ul`
  display: flex;
  flex-flow: wrap row;
  gap: 0px 6px;
  justify-content: space-around;
  margin-bottom: 15px;

  li {
    font-size: 11px;
    line-height: 13px;
    font-weight: 400;
    letter-spacing: 4%;
    color: black;
  }

  p {
    font-size: 13px;
    line-height: 16px;
    font-weight: 400;
    letter-spacing: -1.3%;
    color: #4e5a65;
  }
`;

const Circle = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  background-color: ${(props) => props.color};
  border: solid 1px ${(props) => props.border};
  border-radius: 50%;
  margin: 0 auto 6px;
`;

const Form = styled.form`
  display: block;
  margin-top: 15px;
  margin-bottom: 132px;

  label,
  input,
  a {
    display: block;
    font-size: 18px;
    line-height: 21px;
    font-weight: 400;
  }

  label {
    margin-bottom: 4px;
    color: #293845;
  }

  input + label {
    margin-top: 8px;
  }

  input {
    padding: 7px 15px;
    width: 100%;
    font-style: italic;
    color: #afafaf;
    border: solid 1px #d4d4d4;
    outline: none;
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 30px auto 0;
    width: 225px;
    height: 42px;
    border: none;
    border-radius: 3px;
    letter-spacing: 4%;
    color: white;
    background-color: #e8833a;
  }
`;

export { Flex, Circle, Form };
