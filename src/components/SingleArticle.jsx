import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getArticle } from "../../api";
import Box from '@mui/material/Box';
import {drawerWidth} from '../components/Header'

export default function SingleArticle({articles}) {
    const articleId = useParams().article_id
    const [article, setArticle] = useState([])
    useEffect(() => {
        getArticle(articleId).then((response) => {
            
            setArticle(response.data.article)
        })
    }, [])
    
    return (
        <Box sx={{ 
            width: '100%' - drawerWidth, 
            bgcolor: 'background.paper',
            ml: { sm: `${drawerWidth}px` },
            }}>
            <img src={article.article_img_url} width="100px" alt="" />
            <h2>{article.title}</h2>
            <h3>Author: {article.author}p</h3>
            <h4>Topic: {article.topic}</h4>
            <p>{article.body}</p>
        </Box>
      );
}