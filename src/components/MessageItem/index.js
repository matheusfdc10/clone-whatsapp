import { formatDateMessage } from "../../utils/formatDate";
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
                <p className="text">{data.body}</p>
                <div className="date">{formatDateMessage(data.date)}</div>
            </div>
        </MessageLineStyle>
    )
}

export default MessageItem;