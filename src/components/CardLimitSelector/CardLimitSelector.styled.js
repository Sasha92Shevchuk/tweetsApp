import styled from "styled-components";

export const SelectContainer = styled.div`
  display: flex;
  gap: 5px;
  align-items: flex-end;
  flex-direction: column;
`;

export const Label = styled.label`
  font-size: 20px;
  color: #373737;
`;

export const Select = styled.select`
  padding: 8px;
  border-radius: 8px;
  border: 2px solid #471ca9;
  font-size: 14px;
  cursor: pointer;
  &:hover {
    background-color: #ebd8ff;
  }

  &:focus {
    outline: none;
  }
`;

export const Option = styled.option`
  background-color: #f0f0f0;
  color: #333;
  cursor: pointer;
`;
