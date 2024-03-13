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

const getComments = (article_id) => {
  return axios
    .get(`https://backend-project-cr4a.onrender.com/api/articles/${article_id}/comments`)
    .then((data) => {
      return data;
    });
};

const insertVotes = (article_id, newVote) => {
  console.log(newVote)
  return axios
    .patch(`https://backend-project-cr4a.onrender.com/api/articles/${article_id}/`, {inc_votes: newVote})
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

const getUsers = () => {
  return axios
    .get("https://backend-project-cr4a.onrender.com/api/users")
    .then((data) => {
      return data;
    });
};

export { getArticles, getArticle, getComments, getTopics, getUsers, insertVotes }
