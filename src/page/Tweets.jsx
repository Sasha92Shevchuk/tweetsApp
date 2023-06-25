import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { updateFollowStatus } from "../api/api";

import { getAllUsers } from "../api/api";
import { TweetsList } from "../components/TweetsList/TweetsList";
import { GoBackBtn } from "../components/GoBackBtn/GoBackBtn";
import { Loader } from "../components/Loader/Loader";
import { CardLimitSelector } from "../components/CardLimitSelector/CardLimitSelector";
import { FilteredCards } from "../components/FilteredCards/FilteredCards";
import { FilterBox, LoadMore, WrapperNavigate } from "./Tweets.styled";

export const Tweets = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [limitPage, setLimitPage] = useState(3);
  const [isLoading, setIsLoading] = useState(false);
  const [isFollowing, setIsFollowing] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    const fetchUsers = async () => {
      setIsLoading(true);
      try {
        const results = await getAllUsers(
          currentPage,
          limitPage,
          isFollowing,
          signal
        );
        if (results.length === 0) {
          setIsDisabled(true);
        }
        setIsLoading(false);
        setUsers((prev) => [...prev, ...results]);
      } catch (error) {
        if (error.name !== "AbortError") {
          toast.error(error);
        }
      }
    };
    fetchUsers();
    return () => {
      controller.abort();
    };
  }, [currentPage, limitPage, isFollowing]);

  const handleToogleStatus = async (id) => {
    try {
      const updateUser = await updateFollowStatus(id);
      const updateAllUsers = users.map((user) => {
        if (user.id === id) {
          return updateUser;
        }
        return user;
      });
      let filteredUsers = [...updateAllUsers];
      if (isFollowing !== "") {
        filteredUsers = updateAllUsers.filter(
          (user) => user.isFollowing === (isFollowing === "true")
        );
      }

      setUsers(filteredUsers);

      toast.success("Tracking status updated");
    } catch (error) {
      toast.error(error);
    }
  };
  const handleLoadMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handleLimitChange = (limit) => {
    setLimitPage(limit);
    setCurrentPage(1);
    setUsers([]);
  };

  const handleFilterUsers = async () => {
    setUsers([]);
    setCurrentPage(1);
  };

  return (
    <>
      <WrapperNavigate>
        <GoBackBtn />
        <FilterBox>
          <CardLimitSelector onLimitChange={handleLimitChange} />
          <FilteredCards
            onFilterUsers={handleFilterUsers}
            setIsFollowing={setIsFollowing}
          />
        </FilterBox>
      </WrapperNavigate>
      {users?.length > 0 && (
        <TweetsList users={users} handleToogleStatus={handleToogleStatus} />
      )}
      {isLoading ? (
        <Loader />
      ) : (
        !isDisabled && <LoadMore onClick={handleLoadMore}>Load More</LoadMore>
      )}
    </>
  );
};

export default Tweets;
