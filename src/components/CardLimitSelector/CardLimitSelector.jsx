import PropTypes from "prop-types";
import {
  Label,
  Option,
  Select,
  SelectContainer,
} from "./CardLimitSelector.styled";

export const CardLimitSelector = ({ onLimitChange }) => {
  const handleChange = (e) => {
    const limit = parseInt(e.target.value);
    onLimitChange(limit);
  };

  return (
    <SelectContainer>
      <Label htmlFor="cardLimit">Set the quantity of cards:</Label>
      <Select id="cardLimit" onChange={handleChange}>
        <Option value="3">3</Option>
        <Option value="6">6</Option>
        <Option value="9">9</Option>
      </Select>
    </SelectContainer>
  );
};

CardLimitSelector.propTypes = {
  onLimitChange: PropTypes.func.isRequired,
};
