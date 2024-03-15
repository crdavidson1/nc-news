import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as React from 'react';
import { getArticle, getComments, getUsers } from "../../api";
import Box from '@mui/material/Box';
import {drawerWidth} from '../components/Header'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Comments from "./Comments";
import Votes from "./Votes";
import InsertComment from "./InsertComment";
import { Container } from "@mui/material";

export default function SingleArticle({username}) {
    const articleId = useParams().article_id
    const [isNewData, setIsNewData] = useState(false)
    const [error, setError] = useState('')
    const [article, setArticle] = useState({})
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setIsLoading(true)
        getArticle(articleId).then((response) => {
            setArticle(response.data.article)
            setIsLoading(false)
        })
        .catch((err) => {
            setIsLoading(false)
            setError(err.response.data.msg)
        })
    }, [articleId])
    const date = new Date(article.created_at).toDateString()
    if (isLoading) {
        return (
            <Box sx={{ 
                width: '100%' - drawerWidth, 
                bgcolor: 'background.paper',
                ml: { sm: `${drawerWidth+30}px` },
                }}>
                <div>Loading...</div>
            </Box>
        )
    } else if (error) {
        return (
            <Box sx={{ 
                width: '100%' - drawerWidth, 
                bgcolor: 'background.paper',
                ml: { sm: `${drawerWidth+30}px` },
                }}>
                <div>{error}</div>
            </Box>
        )
    }
    else {
        return (
            <Container>
                <Votes article={article}/>
                <Box sx={{ 
                width: '100%' - drawerWidth, 
                bgcolor: 'background.paper',
                ml: { sm: `${drawerWidth+30}px` },
                }}>
                <br></br>
                <img src={article.article_img_url} width="100px" alt="" />
                <Typography
                variant="h4"
                >{article.title}  
                </Typography>
                <h3>{date}</h3>
                <h3>Author: {article.author}p</h3>
                <h4>Topic: {article.topic}</h4>
                <p>{article.body}</p>
                <InsertComment article_id={article.article_id} username={username} isNewData={isNewData} setIsNewData={setIsNewData}/>
                <Comments username={username} isNewData={isNewData} setIsNewData={setIsNewData}/>
            </Box>
            </Container>
            
            
        );
    }
}