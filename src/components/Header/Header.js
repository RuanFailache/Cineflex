import styled from "styled-components";

export default function Header () {
    return (
        <TopBar>
            <h1>CINEFLEX</h1>
        </TopBar>
    );
}

const TopBar = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    width: 100%;
    height: 67px;
    top: 0;
    left: 0;
    background-color: #C3CFD9;
    z-index: 100;

    h1 {
        font-size: 34px;
        line-height: 39px;
        font-weight: 400;
        color: #E8833A;
    }
`;