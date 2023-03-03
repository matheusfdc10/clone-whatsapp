import { ChatWindowStyle } from "./style";
import { useEffect, useState, useRef } from "react";
import EmojiPicker from 'emoji-picker-react';
import MessageItem from "../MessageItem";

import { BiSearchAlt2 } from 'react-icons/bi'
import { IoMdAttach, IoMdClose, IoMdSend } from 'react-icons/io'
import { FiMoreVertical } from 'react-icons/fi'
import { BsEmojiLaughing, BsMicFill } from 'react-icons/bs'

const ChatWindow = ({user}) => {
    let recognition = null;
    let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
    if(SpeechRecognition) {
        recognition = new SpeechRecognition();
    }
    const [emojiOpen, setEmojiOpen] = useState(false)
    const [text, setText] = useState('')
    const [listening, setListening] = useState(false)
    const [list, setList] = useState([{author: 123, body: 'blablabla'}, {author: 1234,body: 'blablabla'}, {author: 123,body: 'blablabla'},{author: 123, body: 'blablabla'}, {author: 1234,body: 'blablabla'}, {author: 123,body: 'blablabla'},{author: 123, body: 'blablabla'}, {author: 1234,body: 'blablabla'}, {author: 123,body: 'blablabla'},{author: 123, body: 'blablabla'}, {author: 1234,body: 'blablabla'}, {author: 123,body: 'blablabla'},{author: 123, body: 'blablabla'}, {author: 1234,body: 'blablabla'}, {author: 123,body: 'blablabla'},{author: 123, body: 'blablabla'}, {author: 1234,body: 'blablabla'}, {author: 123,body: 'blablabla'},{author: 123, body: 'blablabla'}, {author: 1234,body: 'blablabla'}, {author: 123,body: 'blablabla'}])
    const body = useRef()

    useEffect(() => {
        if(body.current.scrollHeight > body.current.offsetHeight) {
            body.current.scrollTop = body.current.scrollHeight - body.current.offsetHeight
        }
    }, [list])

    const handleEmojiClick = (e, emojiObject) => {
        setText(text + e.emoji)
    }

    const handleOpenEmoji = () => {
        setEmojiOpen(true)
    }

    const handleCloseEmoji = () => {
        setEmojiOpen(false)
    }

    const handleMicClick = () => {
        if(recognition){
            recognition.onstart = () => {
                setListening(true)
            }
            recognition.onend = () => {
                setListening(false)
            }
            recognition.onresult = (e) => {
                setText(e.results[0][0].transcript)
            }

            recognition.start()
        }
    }

    const handleSendClick = () => {

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
            <div 
                className="body"
                ref={body}
            >
                {list.map((item, key) => {
                    return(
                        <MessageItem 
                            key={key}
                            data={item}
                            user={user}
                        />
                    )
                })}
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
                        <div 
                            className="btn"
                            onClick={handleSendClick}
                        >
                            <IoMdSend />
                        </div>
                    :
                        <div
                            onClick={handleMicClick}
                            className="btn"
                        >
                            <BsMicFill  style={{color: !listening || '#126ECE'}} />
                        </div>
                    }
                </div>
            </div>
        </ChatWindowStyle>
    )
}

export default ChatWindow;