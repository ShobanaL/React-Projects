import botProfileImg from '../assets/bot.png'
import userProfileImg from '../assets/user.png'
import './ChatMessage.css'

// React component for displaying chat messages
export function ChatMessage(props) {
  // Destructuring props to extract message and sender
  const { message, sender } = props;

  return (
    <div className={sender === "bot" ? "chat-message-bot" : "chat-message-user"}>
      {/* Guard operators are used to conditionally render the bot and user images based on the sender */}

      {sender === "bot" && (
        <img src={botProfileImg} className="chat-message-profile"/>
      )}

      <div className="chat-message-text">{message}</div>

      {sender === "user" && (
        <img src={userProfileImg} className="chat-message-profile"/>
      )}
    </div>
  );
}