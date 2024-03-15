import axios from "axios";

const getArticles = (sortBy, order) => {
  return axios
    .get(`https://backend-project-cr4a.onrender.com/api/articles/?sort_by=${sortBy}&order=${order}`)
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
  return axios
    .patch(`https://backend-project-cr4a.onrender.com/api/articles/${article_id}/`, {inc_votes: newVote})
    .then((data) => {
      return data;
    })
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

const insertComment = (article_id, newComment, name) => {
  const comment =  {body: newComment, username: name}
  return axios
    .post(`https://backend-project-cr4a.onrender.com/api/articles/${article_id}/comments`, comment)
    .then((data) => {
      return data;
    });
};

const deleteComment = (comment_id) => {
  return axios
    .delete(`https://backend-project-cr4a.onrender.com/api/comments/${comment_id}`)
    .then((data) => {
      return data;
    });
};

const getTopicalArticles = (topic, sortBy, order) => {
  return axios
    .get(`https://backend-project-cr4a.onrender.com/api/articles/?sort_by=${sortBy}&order=${order}&topic=${topic}`)
    .then((data) => {
      return data;
    });
};


export { getArticles, getArticle, getComments, getTopics, getUsers, insertVotes, insertComment, deleteComment, getTopicalArticles }
