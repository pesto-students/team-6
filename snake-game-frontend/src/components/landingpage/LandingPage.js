import React from 'react';
import styled from 'styled-components';
import { Header, H1 } from './Header.js';

const Button = styled.button`
  font-size: 5rem;
  padding: 1rem 0.5rem;
`;

const LandingPage = () => (
  <div>
    <Header>
      <H1>SNAKO</H1>
    </Header>
    <input placeholder='Enter your name here' />
    <Button>Let's Begin</Button>
  </div>
);

export default LandingPage;
