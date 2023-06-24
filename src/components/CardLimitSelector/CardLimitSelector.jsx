import PropTypes from "prop-types";

export const CardLimitSelector = ({ onLimitChange }) => {
  const handleChange = (e) => {
    const limit = parseInt(e.target.value);
    onLimitChange(limit);
  };

  return (
    <div>
      <label htmlFor="cardLimit">Number of cards per page:</label>
      <select id="cardLimit" onChange={handleChange}>
        <option value="3">3</option>
        <option value="6">6</option>
        <option value="9">9</option>
      </select>
    </div>
  );
};

CardLimitSelector.propTypes = {
  onLimitChange: PropTypes.func.isRequired,
};
