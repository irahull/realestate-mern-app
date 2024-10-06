import apiRequest from "./apiRequest";

export const getSinglePostDetails = async ({ params }) => {
  const res = await apiRequest(`/posts/` + params.id);
  return res.data.data;
};

export const searchLoader = async ({ request, params }) => {
  const query = request.url.split("?")[1];
  const res = await apiRequest(`/posts/all?` + query);

  return res.data.data;
};
