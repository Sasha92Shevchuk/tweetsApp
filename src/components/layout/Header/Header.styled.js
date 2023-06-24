import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const HeaderBox = styled.header`
  display: flex;
  width: inherit;
  padding-left: 40px;
  box-shadow: 0px 10px 19px -3px rgba(148, 148, 148, 1);
  border-radius: 16px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  gap: 40px;
  height: 60px;
`;

export const PageLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 25px;
  padding: 8px 16px;
  border-radius: 10px;
  font-size: 22px;
  font-weight: bold;
  background-color: rgb(235, 216, 255);
  color: #373737;
  transition: all 250ms ease;
  box-shadow: 0px 3.4369285106658936px 3.4369285106658936px 0px #00000040;
  &.active {
    background-color: #5cd3a8;
  }
  :hover,
  :focus {
    transform: scale(1.03);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
    outline: none;
  }
`;
