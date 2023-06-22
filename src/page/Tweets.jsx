import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { updateFollowStatus } from "../api/api";

import { getAllUsers } from "../api/api";
import { TweetsList } from "../components/TweetsList/TweetsList";
import { GoBackBtn } from "../components/GoBackBtn/GoBackBtn";

export const Tweets = () => {
  const [users, setUsers] = useState([]);

  const handleToogleStatus = async (id) => {
    try {
      const updateUser = await updateFollowStatus(id);
      const updateAllUsers = users.map((user) => {
        if (user.id === id) {
          return updateUser;
        }
        return user;
      });
      setUsers(updateAllUsers);
      toast.done("Well done");
    } catch (error) {
      toast.error(error);
    }
  };
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const results = await getAllUsers();

        setUsers(results);
      } catch (error) {
        toast.error(error);
      }
    };
    fetchUsers();
  }, []);

  return (
    <>
      <GoBackBtn />
      <h1>Tweets </h1>

      {users?.length > 0 && (
        <TweetsList users={users} handleToogleStatus={handleToogleStatus} />
      )}
    </>
  );
};

export default Tweets;
