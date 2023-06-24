import axios from "axios";
const BASE_URL = "https://6492098f2f2c7ee6c2c954f5.mockapi.io/api/v1/users";

export const getAllUsers = async (page, limit, isFollowing, signal) => {
  const url = `${BASE_URL}?page=${page}&limit=${limit}&isFollowing=${isFollowing}`;

  const { data } = await axios.get(url, {
    signal,
  });
  return data;
};

export const updateFollowStatus = async (id) => {
  const response = await axios.get(`${BASE_URL}/${id}`);
  const user = response.data;

  const updatedUser = {
    ...user,
    isFollowing: !user.isFollowing,
    followers: user.followers + (user.isFollowing ? -1 : 1),
  };

  const { data } = await axios.put(`${BASE_URL}/${id}`, updatedUser);

  return data;
};

export const getAllFollowingUsers = async (page, limit) => {
  const { data } = await axios.get(
    `${BASE_URL}?page=${page}&limit=${limit}&filter=true`
  );
  return data;
};

export const getAllUnFollowingUsers = async (page, limit) => {
  const { data } = await axios.get(
    `${BASE_URL}?page=${page}&limit=${limit}&filter=false`
  );
  return data;
};
