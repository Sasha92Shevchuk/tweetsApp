import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { Item, TitleMovie } from "./TweetCard.styled";

export const TweetCard = ({ id, user, tweets, followers, avatar }) => {
  const location = useLocation();
  const currentPage = location.pathname === "/" ? "/users" : location.pathname;

  return (
    <Item>
      <Link to={`${currentPage}/${id}`} state={{ from: location }}>
        <img src={avatar} alt={user} />
        <TitleMovie>{user}</TitleMovie>
        <p>tweets: {tweets}</p>
        <p>followers: {followers}</p>
      </Link>
    </Item>
  );
};

TweetCard.propTypes = {
  id: PropTypes.number.isRequired,
  user: PropTypes.string,
  avatar: PropTypes.string,
  tweets: PropTypes.number,
  followers: PropTypes.number,
};
