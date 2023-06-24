import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const BackLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-left: 10px;
  color: #373737;
  text-decoration: none;

  border: none;
  cursor: pointer;
  transition: 250ms;

  :hover {
    transform: translateX(-10px);
  }
`;
