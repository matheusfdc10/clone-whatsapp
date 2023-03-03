import Styled from "styled-components";

export const ChatWindowStyle = Styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;

    .header {
        height: 60px;
        border-bottom: 1px solid #CCC;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 15px;

        .header-info {
            display: flex;
            align-items: center;
            cursor: pointer;
            gap: 15px;

            .avatar {
                width: 40px;
                height: 40px;
                border-radius: 50px;
            }

            .name {
                font-size: 17px;
                color: #000;
            }
        }

        .header-buttons {
            display: flex;
            align-items: center;
            gap: 15px;

            .btn {
                width: 24px;
                height: 24px;
                border-radius: 20px;
                display: flex;
                justify-content: center;
                align-items: center;
                cursor: pointer;

                > svg {
                    width: 100%;
                    height: 100%;
                    color: #919191;
                }
            }
        }
    }

    .body {
        flex: 1;
        overflow-y: auto;
        background-color: #E5DDD5;
        background-size: cover;
        background-position: center;
        background-image: url('');
        /* 1:50:00 */
    }

    .emoji-area {
        overflow-y: hidden;

        > aside {
            width: auto !important;
            height: 250px !important;

            .epr-preview {
                display: none;
            }
        }
    }

    .footer {
        height: 62px;
        display: flex;
        align-items: center;
        padding: 5px 17px 5px 10px;
        gap: 12px;

        .pre {
            display: flex;
            gap: 12px;
            
            .btn {
                width: 24px;
                height: 24px;
                border-radius: 20px;
                display: flex;
                justify-content: center;
                align-items: center;
                cursor: pointer;
                overflow: hidden;
                transition: all ease 0.3s;

                > svg {
                    width: 100%;
                    height: 100%;
                    color: #919191;
                }
            }
        }

        .input-area {
            flex: 1;

            > input {
                width: 100%;
                height: 40px;
                border: 0;
                outline: 0;
                background-color: #FFF;
                border-radius: 50px;
                font-size: 15px;
                color: #A4A4A4;
                padding-left: 15px;
            }
        }

        .pos {
            display: flex;

            .btn {
                width: 24px;
                height: 24px;
                border-radius: 20px;
                display: flex;
                justify-content: center;
                align-items: center;
                cursor: pointer;

                > svg {
                    width: 100%;
                    height: 100%;
                    color: #919191;
                }
            }
        }
    }
`