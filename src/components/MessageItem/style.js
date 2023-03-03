import Styled from "styled-components";

export const MessageLineStyle = Styled.div`
    margin-bottom: 6px;
    display: flex;

    .message-item {
        background-color: #FFF;
        border-radius: 10px;
        box-shadow: 0 1px 1px #CCC;
        display: flex;
        flex-direction: column;
        padding: 3px;
        max-width: 90%;

        .text {
            font-size: 14px;
            margin: 5px 40px 5px 5px;
        }

        .date {
            font-size: 11px;
            color: #999;
            margin-right: 5px;
            text-align: right;
            height: 15px;
            margin-top: -15px;
        }
    }
`