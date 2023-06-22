import { FooterBox } from "./Footer.styled";

export const Footer = () => {
  return (
    <FooterBox>
      <div>
        <p>
          © {new Date().getFullYear()} <span>Tweets App.</span>, Inc. All rights
          reserved.
        </p>
      </div>
    </FooterBox>
  );
};
