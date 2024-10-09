import { defer } from "react-router-dom";
import apiRequest from "./apiRequest";

export const getSinglePostDetails = async ({ params }) => {
  const res = await apiRequest(`/posts/` + params.id);
  return res.data.data;
};

export const searchLoader = async ({ request, params }) => {
  const query = request.url.split("?")[1];
  const resPromise =  apiRequest(`/posts/all?` + query);

  return defer({
    postResponse:resPromise
  });
};


export const getUserPosts = async () => {
  const resPromise = await apiRequest(`/posts/user/profilePosts`);
  // return res.data.data;
  return defer({
    postResponse:resPromise
  });
};