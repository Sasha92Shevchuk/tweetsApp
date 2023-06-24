import PropTypes from "prop-types";
import { Button, Item, TitleMovie } from "./TweetCard.styled";

export const TweetCard = ({
  id,
  user,
  tweets,
  followers,
  avatar,
  handleToogleStatus,
  isFollowing,
}) => {
  return (
    <Item>
      <img src={avatar} alt={user} />
      <TitleMovie>{user}</TitleMovie>
      <p>tweets: {tweets}</p>

      <p>followers: {new Intl.NumberFormat("en").format(followers)}</p>
      <Button onClick={() => handleToogleStatus(id)}>
        {!isFollowing ? "Follow" : "Following"}
      </Button>
    </Item>
  );
};

TweetCard.propTypes = {
  id: PropTypes.string.isRequired,
  user: PropTypes.string,
  avatar: PropTypes.string,
  tweets: PropTypes.number,
  followers: PropTypes.number,
  handleToogleStatus: PropTypes.func.isRequired,
  isFollowing: PropTypes.bool,
};
