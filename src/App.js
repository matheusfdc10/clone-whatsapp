import { AppWindowStyle } from "./AppStyle";
import { useEffect, useState } from "react";

import ChatListItem from "./components/ChatListItem";
import ChatIntro from "./components/ChatIntro";
import ChatWindow from "./components/ChatWindow";

import api from  './api.js'

import { MdDonutLarge } from 'react-icons/md'
import { BsFillChatLeftTextFill } from 'react-icons/bs'
import { FiMoreVertical } from 'react-icons/fi'
import { BiSearchAlt2 } from 'react-icons/bi'
import NewChat from "./components/NewChat";
import Login from "./components/Login";


function App() {
  const [chatList, setChatList] = useState([])
  const [activeChat, setActiveChat] = useState({})
  const [user, setUser] = useState(null)
  const [showNewChat, setShowNewChat] = useState(false);

  useEffect(() => {
    if(user) {
      let unsub = api.onChatList(user.id, setChatList)
      return unsub
    }
  }, [user])

  const handleLoginData = async (u) => {
    let newUser = {
      id: u.uid,
      name: u.displayName,
      avatar: u.photoURL
    }
    await api.addUser(newUser)
    
    setUser(newUser)
  }

  if(!user){
    return <Login onReceive={handleLoginData} />
  }

  return (
    <AppWindowStyle>
      <NewChat
        chatList={chatList}
        user={user}
        show={showNewChat} 
        setShow={setShowNewChat}
      />
      <div className="sidebar">
        <header>
          <img className="header-avatar" src={user.avatar} alt="avatar" />
          <div className="header-buttons">
            <div className="header-btn">
              <MdDonutLarge />
            </div>
            <div onClick={() => setShowNewChat(true)} className="header-btn">
              <BsFillChatLeftTextFill />
            </div>
            <div className="header-btn">
              <FiMoreVertical />
            </div>
          </div>
        </header>

        <div className="search">
          <div className="search-input">
            <BiSearchAlt2 />
            <input type="search" placeholder="Procurar ou começar nova conversa" />
          </div>
        </div>

        <div className="chatList">
          {chatList.map((item, key) => {
            return (
              <ChatListItem
                key={key}
                data={item}
                active={activeChat.chatId === chatList[key].chatId}
                onClick={() => setActiveChat(chatList[key])}
              />
            )
        })}
        </div>
      </div>

      <div className="contentArea">
        {
          activeChat.chatId ?
            <ChatWindow 
              user={user}
              data={activeChat}
            />
            :
            <ChatIntro />
        }
      </div>
    </AppWindowStyle>
  );
}

export default App;
