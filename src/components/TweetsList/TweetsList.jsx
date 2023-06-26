import { TweetCard } from "../TweetCard/TweetCard";
import PropTypes from "prop-types";
import { List } from "./TweetsList.styled";

export const TweetsList = ({ users, handleToogleStatus }) => {
  return (
    <List>
      {users.map((user) => (
        <TweetCard
          key={user.id}
          user={user}
          handleToogleStatus={handleToogleStatus}
        />
      ))}
    </List>
  );
};

TweetsList.propTypes = {
  users: PropTypes.array.isRequired,
  handleToogleStatus: PropTypes.func.isRequired,
};
