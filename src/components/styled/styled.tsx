import styled from "styled-components";
import { useState } from 'react';
import { StyledButton } from './components/styled/styled.tsx';

export const Card = styled.div`
  padding: 18px 20px;
  border-radius: 8px;
  background-color: white;

  @media (prefers-color-scheme: dark) {
    background-color: #111;
  }
`;

interface StyledButtonProps {
  isPressed: boolean;
}

export const StyledButton = styled.button<StyledButtonProps>`
  background: ${props => props.isPressed ? '#4CAF50' : '#f0f0f0'};
  color: ${props => props.isPressed ? 'white' : 'black'};
  border: none;
  padding: 8px 16px;
  cursor: pointer;
  border-radius: 4px;
  transition: background 0.3s;

  &:hover {
    opacity: 0.9;
  }
`;

export const FlexBoxRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between
  gap: 10px;
  align-items: center;
`;

export const FlexBoxCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Button = styled.button`
  background-color: ${(props) =>
    props.disabled ? "#6e6e6e" : "var(--tg-theme-button-color)"};
  border: 0;
  border-radius: 8px;
  padding: 10px 20px;
  color: var(--tg-theme-button-text-color);
  font-weight: 700;
  cursor: pointer;
  pointer-events: ${(props) => (props.disabled ? "none" : "inherit")};
`;

export const Ellipsis = styled.div`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const Input = styled("input")`
  padding: 10px 20px;
  border-radius: 10px;
  width: 100%;
  border: 1px solid #c2c2c2;

  @media (prefers-color-scheme: dark) {
    border: 1px solid #fefefe;
  }
`;
