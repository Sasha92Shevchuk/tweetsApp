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
      <Logo src={logo} alt="logo" />
      <SymbolsImg src={card_symbols} alt="symbols" />
      <WrapperAvatar>
        <img src={line} alt="line" />
        <AvatarImgWrapper>
          <img src={circle} alt="circle" />
          <AvatarImg src={avatar} alt={user} />
        </AvatarImgWrapper>
      </WrapperAvatar>

      <TweetsNumb>{tweets} tweets </TweetsNumb>

      <FollowersNumb>
        {new Intl.NumberFormat("en").format(followers)} followers
      </FollowersNumb>
      <Button onClick={() => handleToogleStatus(id)} isFollowing={isFollowing}>
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
