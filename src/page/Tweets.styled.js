import styled from "styled-components";

export const WrapperNavigate = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-items: flex-start;
`;

export const FilterBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 30px;
`;

export const LoadMore = styled.button`
  width: 150px;
  height: 50px;
  background-color: #471ca9;
  border: 0;
  border-radius: 56px;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-family: system-ui, -apple-system, system-ui, "Segoe UI", Roboto, Ubuntu,
    "Helvetica Neue", sans-serif;
  font-size: 18px;
  font-weight: 600;
  outline: 0;
  padding: 16px 21px;
  position: relative;
  text-align: center;
  transition: all 0.25s;
  touch-action: manipulation;

  :before {
    background-color: initial;
    background-image: linear-gradient(#fff 0, rgba(255, 255, 255, 0) 100%);
    border-radius: 125px;
    content: "";
    height: 50%;
    left: 4%;
    opacity: 0.5;
    position: absolute;
    top: 0;
    transition: all 0.3s;
    width: 92%;
  }

  :hover {
    box-shadow: rgba(255, 255, 255, 0.2) 0 3px 15px inset,
      rgba(0, 0, 0, 0.1) 0 3px 5px, rgba(0, 0, 0, 0.1) 0 10px 13px;
    transform: scale(1.05);
  }
`;
