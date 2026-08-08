import { useState } from 'react'
import { Chatbot } from 'supersimpledev'
import './ChatInput.css'

// React component for the chat input
export function ChatInput({ chatMessages, setChatMessages }) {
  // inputValue --> Current data
  // setInputValue --> updater function
  const [inputValue, setInputValue] = useState('');
  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  function handleSendMessage() {
    const botResponse = Chatbot.getResponse(inputValue);

    setChatMessages([
      ...chatMessages,
      {
        id: chatMessages.length + 1,
        message: inputValue,
        sender: "user"
      },
      {
        id: chatMessages.length + 2,
        message: botResponse,
        sender: "bot"
      }
    ]);

    setInputValue('');
  }

  return (
    // Fragment is used here to avoid adding an extra div to the DOM
    <div className="chatinput-container">
      <input
        value={inputValue}
        placeholder="Type a message..."
        size="30"
        onChange={handleInputChange}
      />
      <button
        className="send-button"
        onClick={handleSendMessage}
      >
        Send
      </button>
    </div>
  );
}