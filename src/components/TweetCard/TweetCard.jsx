import PropTypes from "prop-types";
import {
  Button,
  Item,
  AvatarImg,
  AvatarImgWrapper,
  SymbolsImg,
  WrapperAvatar,
  Logo,
  TweetsNumb,
  FollowersNumb,
} from "./TweetCard.styled";
import card_symbols from "../../assets/picture.png";
import logo from "../../assets/Logo.png";

export const TweetCard = ({ user, handleToogleStatus }) => {
  return (
    <Item>
      <Logo src={logo} alt="logo" />
      <SymbolsImg src={card_symbols} alt="symbols" />
      <WrapperAvatar>
        <AvatarImgWrapper>
          <AvatarImg
            src={user.avatar}
            alt={user.user}
            width={"62px"}
            height={"62px"}
          />
        </AvatarImgWrapper>
      </WrapperAvatar>

      <TweetsNumb>{user.tweets} tweets </TweetsNumb>

      <FollowersNumb>
        {new Intl.NumberFormat("en").format(user.followers)} followers
      </FollowersNumb>
      <Button
        onClick={() => handleToogleStatus(user)}
        isFollowing={user.isFollowing}
      >
        {!user.isFollowing ? "Follow" : "Following"}
      </Button>
    </Item>
  );
};

TweetCard.propTypes = {
  user: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired,
    tweets: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
    isFollowing: PropTypes.bool.isRequired,
  }).isRequired,

  handleToogleStatus: PropTypes.func.isRequired,
};
