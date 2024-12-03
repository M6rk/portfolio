import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  align-items: center;
  appearance: none;
  background-color: ${props => props.color1};
  border-radius: 4px;
  border-width: 0;
  box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, ${props => props.color2} 0 -3px 0 inset;
  box-sizing: border-box;
  color: ${props => props.textColor};
  cursor: pointer;
  display: inline-flex;
  font-family: "JetBrains Mono", monospace;
  height: 2.7rem;
  justify-content: center;
  line-height: 1;
  list-style: none;
  overflow: hidden;
  padding-left: 5rem;
  padding-right: 5rem;
  position: relative;
  text-align: left;
  text-decoration: none;
  transition: box-shadow .15s, transform .15s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  will-change: box-shadow, transform;
  font-size: 1.15rem;

  &:focus {
    box-shadow: ${props => props.color2} 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, ${props => props.color2} 0 -3px 0 inset;
  }

  &:hover {
    box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, ${props => props.color2} 0 -3px 0 inset;
    transform: translateY(-2px);
  }

  &:active {
    box-shadow: ${props => props.color2} 0 3px 7px inset;
    transform: translateY(2px);
  }
      @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    padding: 0 1rem;
  }
`;

const AnimatedButton = ({ text, link, color1, color2, textColor }) => {
  return (
    <a href={'/' + link}>
      <Button color1={color1} color2={color2} textColor={textColor} role="button">
        {text}
      </Button>
    </a>
  );
};

export default AnimatedButton;