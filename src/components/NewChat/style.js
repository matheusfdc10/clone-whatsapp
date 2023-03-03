import Styled from 'styled-components'

export const NewChatStyle = Styled.div`
    width: 35%;
    max-width: 415px;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    background-color: #FFF;
    display: flex;
    flex-direction: column;
    border-right: 1px solid #DDD;
    transition: all ease 0.5s;

    .head {
        display: flex;
        align-items: center;
        background-color: #00BFA5;
        align-items: center;
        padding: 60px 15px 15px 15px;
        gap: 22px;

        .back-button {
            width: 40px;
            height: 40px;
            border-radius: 20px;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;

            > svg {
                width: 100%;
                height: 100%;
                color: #FFF;
            }
        }

        .head-title {
            font-size: 19px;
            height: 40px;
            line-height: 40px;
            color: #FFF;
            flex: 1;
            font-weight: bold;
        }
    }

    .list {
        flex: 1;
        overflow-y: auto;

        .item {
            display: flex;
            align-items: center;
            padding: 15px;
            cursor: pointer;
            gap: 15px;

            :hover {
                background-color: #F5F5F5;
            }

            .avatar {
                width: 50px;
                height: 50px;
                border-radius: 50%;
            }

            .name {
                font-size: 17px;
                color: #000
            }
        }
    }
`