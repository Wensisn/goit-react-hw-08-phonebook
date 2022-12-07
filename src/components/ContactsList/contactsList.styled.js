import styled from 'styled-components';

export const ContactBosx = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;

export const ContactList = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0;
  gap: 20px;
`;

export const ContactItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 6px;
  transition: transform 0.25s linear;
  box-shadow: 1px 4px 6px rgb(0 0 0 / 16%), 0 4px 4px rgb(0 0 0 / 6%),
    0 1px 1px rgb(0 0 0 / 12%);
  color: inherit;
  list-style-type: none;
`;

export const ContactBoxsInfo = styled.div`
  padding: 20px;
  display: flex;
`;

export const ContactInfo = styled.p`
  display: flex;
  justify-content: center;
  text-decoration: none;
  // font-size: 18px;
  // color: black;
  color: #fff;
  font-size: 18px;
`;

export const ContactButton = styled.button`
  border-radius: 5000px;
  background: transparent;
  color: #fff;
  margin-left: 40px;
  font-size: 18px;
  background: rgba(255, 255, 255, 0.3);
  box-shadow: 4px 4px 60px rgb(0 0 0 / 20%);
  border: none;
`;
export const Indent = styled.div`
  margin-top: 500px;
`;
