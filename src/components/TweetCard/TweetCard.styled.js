import styled from "styled-components";

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 380px;
  height: 460px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
`;

export const Logo = styled.img`
  position: absolute;
  top: 20px;
  left: 20px;
`;

export const SymbolsImg = styled.img`
  position: absolute;
  top: 28px;
  left: 36px;
  display: block;
  width: 308px;
  height: 168px;
`;
export const WrapperAvatar = styled.div`
  width: 100%;
  height: 8px;
  margin-top: 214px;
  background: #ebd8ff;
  box-shadow: 0 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0 -1.71846px 3.43693px #ae7be3, inset 0 3.43693px 2.5777px #fbf8ff;
  position: relative;
`;
export const AvatarImgWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: #ebd8ff;
  box-shadow: inset 0 -2.19582px 4.39163px #ae7be3,
    inset 0 4.39163px 3.29372px #fbf8ff;
`;
export const AvatarImg = styled.img`
  width: 62px;
  height: 62px;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const TweetsNumb = styled.span`
  margin-top: 62px;
  line-height: 1.5;
  font-size: 16px;
  color: white;
  text-transform: uppercase;
`;
export const FollowersNumb = styled.span`
  margin-top: 16px;
  line-height: 1.5;
  font-size: 16px;
  color: white;
  text-transform: uppercase;
`;

export const Button = styled.button`
  width: 196px;
  height: 50px;
  padding: 14px 28px;
  border-radius: 10px;
  margin-top: 26px;
  color: #373737;
  font-size: 18px;
  font-weight: 600;
  line-height: 1.22;
  background-color: ${(props) => (props.isFollowing ? "#5CD3A8" : "#ebd8ff")};
  transition: all 250ms ease;
  cursor: pointer;
  border: none;
  box-shadow: 0px 3.4369285106658936px 3.4369285106658936px 0px #00000040;

  :hover,
  :focus {
    transform: scale(1.05);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
    outline: none;
  }
`;
