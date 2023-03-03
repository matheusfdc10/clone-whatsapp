import Styled from "styled-components";

export const ChatIntroStyle = Styled.div`
    background-color: #F8F9FA;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    border-bottom: 6px solid #008069;

    > svg {
        max-width: 360px;
    }

    > h1 {
        font-size: 32px;
        color: #525252;
        font-weight: normal;
        margin-top: 30px;
    }

    > h2 {
        font-size: 14px;
        color: #777;
        font-weight: normal;
        margin-top: 0;
        text-align: center;
    }

    > div {
        display: flex;
        align-items: center;
        gap: 5px;
        font-size: 14px;
        color: #777;
        font-weight: normal;
        margin-top: 20px;

        > p {
            margin: 0;
        }
    }
`