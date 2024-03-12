import axios from "axios";

const getArticles = () => {
  return axios
    .get("https://backend-project-cr4a.onrender.com/api/articles")
    .then((data) => {
      return data;
    });
};

const getTopics = () => {
  return axios
    .get("https://backend-project-cr4a.onrender.com/api/topics")
    .then((data) => {
      return data;
    });
};

export { getArticles, getTopics }