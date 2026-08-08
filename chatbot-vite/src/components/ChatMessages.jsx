import { useEffect, useRef } from 'react'
import { ChatMessage } from './ChatMessage';
import './ChatMessages.css'

// React component for displaying a list of chat messages
export default function ChatMessages({chatMessages}) {
  // useRef - Automatically save an html element reference from the component.
  // Used to create a reference to the chat messages container for scrolling purposes
  const chatMessagesRef = useRef(null);

  // useEffect - Runs code component is added or updated.
  // Used to scroll to the bottom of the chat messages container whenever a new message is added
  useEffect(() => {
    const containerElem = chatMessagesRef.current;
    if (containerElem) {
      containerElem.scrollTop = containerElem.scrollHeight;
    }
  }, [chatMessages]);

  const chatMessageComponents = chatMessages.map(message => {
    return (
      <ChatMessage
        message={message.message}
        sender={message.sender}
        key={message.id}
      />
    );
  });

  return (
    <div
      className="chat-messages-container"
      ref={chatMessagesRef}
    >
      {chatMessageComponents}
    </div>
  );
}