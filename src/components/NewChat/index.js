import { NewChatStyle } from "./style";
import {BiArrowBack} from 'react-icons/bi'
import { useEffect, useState } from "react";
import api from "../../api";

const NewChat = ({user, chatList, show, setShow}) => {
    const [list, setList] = useState([])
        
    useEffect(() => {
        const getList = async () => {
            if(user) {
                let list = []
                let results = await api.getContactList(user.id)
                chatList.forEach(item => {
                    for(let i in results){
                        if(results[i].id !== item.width){
                            list.push(results[i])
                        }
                    }
                })
                setList(list)
            }
        }
        getList()
    }, [user])

    const addNewChat = async (newUser) => {
        await api.addNewChat(user, newUser)
        setShow(false)
    }

    return (
        <NewChatStyle style={{left: show || - 415}}>
            <div className="head">
                <div onClick={() => setShow(false)} className="back-button">
                    <BiArrowBack />
                </div>
                <div className="head-title">Nova Conversa</div>
            </div>
            <div className="list">
                {list.map((item, key) => {
                    return (
                        <div 
                            key={key}
                            className='item'
                            onClick={() => addNewChat(item)}
                        >
                            <img className="avatar" src={item.avatar} alt="avatar"/>
                            <div className="name">{item.name}</div>
                        </div>
                    )
                })}
            </div>
        </NewChatStyle>
    )
}

export default NewChat;