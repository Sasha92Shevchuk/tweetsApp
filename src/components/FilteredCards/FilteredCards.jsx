import PropTypes from "prop-types";

export const FilteredCards = ({ onFilterUsers, setIsFollowing }) => {
  const handleFilterChange = (event) => {
    const value = event.target.value;
    setIsFollowing(value);
    onFilterUsers();
  };

  return (
    <select onChange={handleFilterChange}>
      <option value={""}>All Users</option>
      <option value={true}>Following</option>
      <option value={false}>Not Following</option>
    </select>
  );
};

FilteredCards.propTypes = {
  onFilterUsers: PropTypes.func.isRequired,
  setIsFollowing: PropTypes.func.isRequired,
};
