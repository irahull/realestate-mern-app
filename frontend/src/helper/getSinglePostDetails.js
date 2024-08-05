import apiRequest from "./apiRequest";

export const getSinglePostDetails = async ({params}) => {
  const res = await apiRequest(`/posts/` + params.id);
  return res.data.data;
};
