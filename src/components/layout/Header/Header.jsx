import { HeaderBox, List, PageLink } from "./Header.styled";

export const Header = () => {
  return (
    <HeaderBox>
      <nav>
        <List>
          <li>
            <PageLink to="/">Home</PageLink>
          </li>
          <li>
            <PageLink to="/tweets">Tweets</PageLink>
          </li>
        </List>
      </nav>
    </HeaderBox>
  );
};
