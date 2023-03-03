import Styled from 'styled-components'

export const AppWindowStyle = Styled.div`
    display: flex;
    height: 100vh;
    background-color: #EDEDED;

    .sidebar {
        width: 35%;
        max-width: 415px;
        display: flex;
        flex-direction: column;
        border-right: 1px solid #DDD;

        > header {
            height: 60px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 15px;

            .header-avatar {
                width: 40px;
                height: 40px;
                border-radius: 20px;
                cursor: pointer;
            }

            .header-buttons {
                display: flex;
                gap: 20px;

                .header-btn {
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

        .search {
            background-color: #F6F6F6;
            border-bottom: 1px solid #EEE;
            padding: 5px 15px;

            .search-input {
                background-color: #FFF;
                height: 40px;
                border-radius: 20px;
                display: flex;
                align-items: center;
                padding: 0 10px;

                > svg {
                    width: 20px;
                    height: 20px;
                    color: #919191;
                }

                > input {
                    flex: 1;
                    border: 0;
                    outline: 0;
                    background-color: transparent;
                    margin-left: 10px;
                }
            }
        }

        .chatList {
            flex: 1;
            background-color: #FFF;
            overflow-y: auto;
        }
    }

    .contentArea {
        flex: 1;
    }
`