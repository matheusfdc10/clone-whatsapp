import { MessageLineStyle } from "./style";

const MessageItem = ({data, user, ...props}) => {
    return (
        <MessageLineStyle 
            {...props}
            style={{
                justifyContent: user.id === data.author ? 'flex-end' : 'flex-start'
            }}
        >
            <div 
                className="message-item"
                style={{
                    backgroundColor: user.id === data.author ? '#d9fdd3' : null
                }}
            >
                <div className="text">{data.body}</div>
                <div className="date">19:00</div>
            </div>
        </MessageLineStyle>
    )
}

export default MessageItem;