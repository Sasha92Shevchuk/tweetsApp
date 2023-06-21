import { getAllUsers } from "../api/api";

import { useState, useEffect } from "react";

import { TweetsList } from "../components/TweetsList/TweetsList";

export const Tweets = () => {
  const [users, setUsers] = useState([]);

  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const results = await getAllUsers();
        console.log(results);
        setUsers(...results);
      } catch (error) {
        setError(error);
      }
    };
    fetchUsers();
  }, []);

  return (
    <>
      <h1>Tweets </h1>

      {users?.length > 0 && <TweetsList users={users} />}
    </>
  );
};

export default Tweets;
