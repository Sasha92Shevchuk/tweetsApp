import { TweetCard } from "../TweetCard/TweetCard";
import PropTypes from "prop-types";
import { List } from "./TweetsList.styled";

export const TweetsList = ({ users }) => {
  console.log(users);
  return (
    <List>
      {users.map((movie) => (
        <TweetCard key={users.id} {...movie} />
      ))}
    </List>
  );
};

TweetsList.propTypes = {
  users: PropTypes.array.isRequired,
};
