import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  display: flex;
  justify-content: center;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid black;
  // background: linear-gradient(45deg, #fc466b, #3f5efb);

  > nav {
    display: flex;
    align-items: center;
  }
`;

export const Logo = styled.p`
  font-weight: 700;
  margin: 0;
`;

export const Nav = styled.nav``;

export const Link = styled(NavLink)`
  font-size: 22px;
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: #4c28bb;
  }
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 4px 4px 60px 8px rgba(0, 0, 0, 0.2);
  }
`;

export const Href = styled(Link)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: #4c28bb;
  }
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 4px 4px 60px 8px rgba(0, 0, 0, 0.2);
  }
`;

export const Background = styled.div`
background: linear-gradient(45deg, #fc466b, #3f5efb);
`;

export const Block = styled.div`
  margin-right: 200px;
`;


