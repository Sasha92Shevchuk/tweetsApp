import { useEffect, useState } from "react";
import { TweetsList } from "../components/TweetsList/TweetsList";
//import { getTrendingMovies } from '../api/api';

export const Home = () => {
  const [topMovies, setTopMovies] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("fetch", setTopMovies([]));
        //const { results } = await getTrendingMovies();
        //setTopMovies([...results]);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <h1>It`s home page</h1>
      <TweetsList movies={topMovies} />
    </>
  );
};

export default Home;
