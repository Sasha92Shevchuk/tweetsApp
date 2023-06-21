import axios from "axios";

export const getAllUsers = async () => {
  const { data } = await axios.get(
    "https://6492098f2f2c7ee6c2c954f5.mockapi.io/api/v1/users"
  );
  return data;
};
