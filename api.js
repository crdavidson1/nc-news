import axios from "axios";

const getArticles = () => {
  return axios
    .get("https://backend-project-cr4a.onrender.com/api/articles")
    .then((data) => {
      return data;
    });
};

const getArticle = (article_id) => {
  return axios
    .get(`https://backend-project-cr4a.onrender.com/api/articles/${article_id}`)
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

export { getArticles, getArticle, getTopics }