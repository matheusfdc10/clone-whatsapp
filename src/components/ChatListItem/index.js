import { ChatListItemStyle } from "./style";

const ChatListItem = ({active, data, ...props}) => {
    return (
        <ChatListItemStyle 
            style={active ? {backgroundColor: '#EBEBEB'} : {}} 
            {...props}
        >
            <img className="avatar" src={data.image} alt=""/>
            <div className="lines">
                <div className="line">
                    <div className="name">{data.title}</div>
                    <div className="date">19:00</div>
                </div>
                <div className="line">
                    <div className="lastMsg">
                        <p>Opa, tudo bem?Opa, tudo bem?Opa, tudo bem?Opa, tudo bem?Opa, tudo bem?</p>
                    </div>
                </div>
            </div>
        </ChatListItemStyle>
    )
}

export default ChatListItem;