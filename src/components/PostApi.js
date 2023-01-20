import { API_URL } from "./API";

export const getPosts = async () => {
  const response = await API_URL.get("/posts");
  return response.data;
};
