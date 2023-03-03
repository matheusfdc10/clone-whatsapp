import Styled from 'styled-components'

export const ChatListItemStyle = Styled.div`
    display: flex;
    cursor: pointer;
    align-items: center;
    height: 70px;

    :hover {
        background-color: #F5F5F5F5;
    }

    .avatar {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        margin-left: 15px;
    }

    .lines {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        border-bottom: 1px solid #EEE;
        padding-right: 15px;
        margin-left: 15px;
        height: 100%;

        flex-wrap: wrap;
        min-width: 0;

        .line {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;

            .name {
                font-size: 17px;
                color: #000;
            }

            .date {
                font-size: 12px;
                color: #999;
            }

            .lastMsg {
                font-size: 14px;
                color: #999;
                display: flex;
                width: 100%;

                > p {
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    margin: 0;
                }
            }
        }
    }
`