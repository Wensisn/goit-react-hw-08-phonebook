import styled from 'styled-components';

export const Indent = styled.div`
  margin-top: 500px;
`;

export const Background = styled.div`
  margin-top: 15px;
  min-width: 100px;
  background: rgba(255, 255, 255, 0.3);
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  gap: 20px;
`;

export const Item = styled.li`
  background: rgba(255, 255, 255, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  transition: transform 0.25s linear;
  box-shadow: 1px 4px 6px rgb(0 0 0 / 16%), 0 4px 4px rgb(0 0 0 / 6%),
    0 1px 1px rgb(0 0 0 / 12%);
  color: inherit;
  list-style-type: none;
  width: 300px;
`;

export const Info = styled.p`
  display: flex;
  justify-content: center;
  text-decoration: none;
  font-size: 18px;
  color: black;
`;

export const Button = styled.button`
  margin-left: 40px;
  font-size: 18px;
  background-color: bisque;
  border: 2px solid burlywood;
`;
