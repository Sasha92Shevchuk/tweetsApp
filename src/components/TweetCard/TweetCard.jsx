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
import line from "../../assets/line.svg";
import circle from "../../assets/circle.svg";

export const TweetCard = ({ user, handleToogleStatus }) => {
  return (
    <Item>
      <Logo src={logo} alt="logo" />
      <SymbolsImg src={card_symbols} alt="symbols" />
      <WrapperAvatar>
        <img src={line} alt="line" />
        <AvatarImgWrapper>
          <img src={circle} alt="circle" />
          <AvatarImg src={user.avatar} alt={user.user} />
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
  user: PropTypes.object.isRequired,

  handleToogleStatus: PropTypes.func.isRequired,
};
