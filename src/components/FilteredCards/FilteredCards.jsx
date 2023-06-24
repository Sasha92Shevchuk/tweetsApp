import PropTypes from "prop-types";
import { FilterContainer, Label, Option, Select } from "./FilteredCards.styled";

export const FilteredCards = ({ onFilterUsers, setIsFollowing }) => {
  const handleFilterChange = (event) => {
    const value = event.target.value;
    setIsFollowing(value);
    onFilterUsers();
  };

  return (
    <FilterContainer>
      <Label htmlFor="filter">Filter by status: </Label>
      <Select id="filter" onChange={handleFilterChange}>
        <Option value={""}>Select all</Option>
        <Option value={true}>Following</Option>
        <Option value={false}>Not Following</Option>
      </Select>
    </FilterContainer>
  );
};

FilteredCards.propTypes = {
  onFilterUsers: PropTypes.func.isRequired,
  setIsFollowing: PropTypes.func.isRequired,
};
