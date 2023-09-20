// CustomChat.js
import React, { useState, useEffect } from 'react';
import { Container, TextField, Button, Paper, Typography } from '@mui/material';

const CustomChat = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    if (window.tidioChatApi) {
      window.tidioChatApi.on('messageToOperator', (payload) => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { type: 'visitor', content: payload.content },
        ]);
      });

      window.tidioChatApi.on('messageToVisitor', (payload) => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { type: 'operator', content: payload.content },
        ]);
      });
    }
  }, []);

  const handleSendMessage = () => {
    if (newMessage.trim() === '') return;

    window.tidioChatApi.newMessage('operator', newMessage);
    setMessages((prevMessages) => [
      ...prevMessages,
      { type: 'operator', content: newMessage },
    ]);
    setNewMessage('');
  };

  return (
    <Container maxWidth="sm">
      <Paper
        elevation={3}
        style={{
          height: '400px',
          overflow: 'auto',
          padding: '20px',
          marginBottom: '20px',
        }}
      >
        {messages.map((message, index) => (
          <Typography
            key={index}
            variant="body1"
            style={{
              marginBottom: '10px',
              textAlign: message.type === 'operator' ? 'right' : 'left',
            }}
          >
            {message.content}
          </Typography>
        ))}
      </Paper>

      <TextField
        variant="outlined"
        fullWidth
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        placeholder="Type your message..."
      />

      <Button
        variant="contained"
        color="primary"
        onClick={handleSendMessage}
        style={{ marginTop: '10px' }}
      >
        Send
      </Button>
    </Container>
  );
};

export default CustomChat;
