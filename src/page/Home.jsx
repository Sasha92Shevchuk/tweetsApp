import { Content, Description, Title } from "./Home.styled";

import { Link } from "react-router-dom";
export const Home = () => {
  return (
    <Content>
      <Title>Welcome to Our Application!</Title>
      <Description>
        Our application allows you to browse and filter tweets, follow users,
        and view their avatars. You can also customize the number of pages
        displayed and load more pages using the `Load More` button.
      </Description>
      <Description>
        Click <Link to="/tweets">here</Link> to go to the tweets page.
      </Description>
      <Description>Be brave and support Ukraine.</Description>
    </Content>
  );
};

export default Home;
