import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getArticle } from "../../api";

export default function SingleArticle({articles}) {
    const articleId = useParams().article_id
    const [article, setArticle] = useState([])
    useEffect(() => {
        getArticle(articleId).then((response) => {
            
            setArticle(response.data.article)
        })
    }, [])
    
    return (
        <ul>
          <li key={article.article_id}>
            <img src={article.article_img_url} width="100px" alt="" />
            <h2>{article.title}</h2>
            <h3>Author: {article.author}p</h3>
            <h4>Topic: {article.topic}</h4>
            <p>{article.body}</p>
          </li>
        </ul>
      );
}