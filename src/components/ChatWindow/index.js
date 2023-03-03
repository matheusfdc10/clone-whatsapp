import { ChatWindowStyle } from "./style";
import EmojiPicker from 'emoji-picker-react';
import { useState } from "react";

import { BiSearchAlt2 } from 'react-icons/bi'
import { IoMdAttach, IoMdClose, IoMdSend } from 'react-icons/io'
import { FiMoreVertical } from 'react-icons/fi'
import { BsEmojiLaughing, BsMicFill } from 'react-icons/bs'

const ChatWindow = () => {
    const [emojiOpen, setEmojiOpen] = useState(false)
    const [text, setText] = useState('')

    const handleEmojiClick = (e, emojiObject) => {
        setText(text + e.emoji)
    }

    const handleOpenEmoji = () => {
        setEmojiOpen(true)
    }

    const handleCloseEmoji = () => {
        setEmojiOpen(false)
    }

    return (
        <ChatWindowStyle>
            <div className="header">
                <div className="header-info">
                    <img className="avatar" src="https://thumbs.dreamstime.com/b/do-retrato-masculino-do-avatar-do-%C3%ADcone-do-perfil-pessoa-ocasional-58249394.jpg" alt=""/>
                    <div className="name">matheus freitas</div>
                </div>
                <div className="header-buttons">
                    <div className="btn">
                        <BiSearchAlt2 />
                    </div>
                    <div className="btn">
                        <FiMoreVertical />
                    </div>
                </div>
            </div>
            <div className="body">
            
            </div>
            <div 
                className="emoji-area"
                style={{height: emojiOpen ? '250px' : '0px'}}
            >
                <EmojiPicker 
                    onEmojiClick={handleEmojiClick}
                    searchDisabled
                    skinTonesDisabled
                    previewConfig={null}
                />
            </div>
            <div className="footer">
                <div className="pre">
                    {!emojiOpen ||
                        <div 
                            className="btn"
                            onClick={handleCloseEmoji}
                        >
                            <IoMdClose />
                        </div>                        
                    }
                    <div className="btn">
                        <BsEmojiLaughing onClick={handleOpenEmoji} style={{color: !emojiOpen || '#009688'}}/>
                    </div>
                    <div className="btn">
                        <IoMdAttach />
                    </div>
                </div>
                <div className="input-area">
                    <input 
                        type="text"
                        placeholder="Digite uma mensagem"
                        onChange={e => setText(e.target.value)}
                        value={text}
                    />
                </div>
                <div className="pos">
                    {text ? 
                        <div className="btn">
                            <IoMdSend />
                        </div>
                    :
                        <div className="btn">
                            <BsMicFill />
                        </div>
                    }
                </div>
            </div>
        </ChatWindowStyle>
    )
}

export default ChatWindow;