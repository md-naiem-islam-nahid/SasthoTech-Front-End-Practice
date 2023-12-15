import React from 'react';
import {  Container } from 'react-bootstrap';

const Home = () => {


  const textStyle = {
    textAlign: 'center',
    color: '#333',
    fontSize: '24px',
    fontWeight: 'bold',
  };

  return (
    
      <Container>
        <div style={textStyle}>
          Welcome to My Notepad Application.
        </div>
      </Container>
   
  )
}

export default Home;
