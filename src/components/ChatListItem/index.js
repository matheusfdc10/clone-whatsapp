import { formatDate } from "../../utils/formatDate";
import { ChatListItemStyle } from "./style";

const ChatListItem = ({active, data, ...props}) => {
    return (
        <ChatListItemStyle 
            style={active ? {backgroundColor: '#EBEBEB'} : {}} 
            {...props}
        >
            <img className="avatar" src={data.image} alt="avatar"/>
            <div className="lines">
                <div className="line">
                    <div className="name">{data.title}</div>
                    <div className="date">{formatDate(data.lastMessageDate)}</div>
                </div>
                <div className="line">
                    <div className="lastMsg">
                        <p>{data.lastMessage}</p>
                    </div>
                </div>
            </div>
        </ChatListItemStyle>
    )
}

export default ChatListItem;