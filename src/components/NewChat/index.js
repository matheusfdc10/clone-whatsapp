import { NewChatStyle } from "./style";
import {BiArrowBack} from 'react-icons/bi'
import { useState } from "react";

const NewChat = ({user, chatList, show, setShow}) => {
    const [list, setList] = useState([
        {id: 123, avatar: 'https://thumbs.dreamstime.com/b/do-retrato-masculino-do-avatar-do-%C3%ADcone-do-perfil-pessoa-ocasional-58249394.jpg', name: 'teste'},
        {id: 123, avatar: 'https://thumbs.dreamstime.com/b/do-retrato-masculino-do-avatar-do-%C3%ADcone-do-perfil-pessoa-ocasional-58249394.jpg', name: 'teste'},
        {id: 123, avatar: 'https://thumbs.dreamstime.com/b/do-retrato-masculino-do-avatar-do-%C3%ADcone-do-perfil-pessoa-ocasional-58249394.jpg', name: 'teste'},
        {id: 123, avatar: 'https://thumbs.dreamstime.com/b/do-retrato-masculino-do-avatar-do-%C3%ADcone-do-perfil-pessoa-ocasional-58249394.jpg', name: 'teste'},
    ])

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
                        >
                            <img className="avatar" src={item.avatar} alt/>
                            <div className="name">{item.name}</div>
                        </div>
                    )
                })}
            </div>
        </NewChatStyle>
    )
}

export default NewChat;