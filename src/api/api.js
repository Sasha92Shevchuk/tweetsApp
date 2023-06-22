import axios from "axios";
import { toast } from "react-toastify";

export const getAllUsers = async () => {
  const { data } = await axios.get(
    "https://6492098f2f2c7ee6c2c954f5.mockapi.io/api/v1/users"
  );
  return data;
};

export const updateFollowStatus = async (id) => {
  const response = await axios.get(
    `https://6492098f2f2c7ee6c2c954f5.mockapi.io/api/v1/users/${id}`
  );
  const user = response.data;

  const updatedUser = {
    ...user,
    isFollowing: !user.isFollowing,
  };

  const { data } = await axios.put(
    `https://6492098f2f2c7ee6c2c954f5.mockapi.io/api/v1/users/${id}`,
    updatedUser
  );
  toast("Статус follow успішно оновлено.");

  return data;
};
