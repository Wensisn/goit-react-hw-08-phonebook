import styled from 'styled-components';

export const Boks = styled.div`
  display: flex;
  justify-content: center;
`;

export const Text = styled.h2`
  font-weight: 500;
  color: #fff;
  opacity: 0.7;
  font-size: 1.4rem;
  text-shadow: 2px 2px 4px rgb(0 0 0 / 20%);
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled.input`
  width: 200px;
  padding: 1em;
  margin-bottom: 2em;
  border: none;
  border-left: 1px solid rgba(255, 255, 255, 0.3);
  border-top: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 5000px;
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  box-shadow: 4px 4px 60px rgb(0 0 0 / 20%);
  font-family: Montserrat, sans-serif;
  font-weight: 500;
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
  text-shadow: 2px 2px 4px rgb(0 0 0 / 20%);
`;
