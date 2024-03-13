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


export default function SingleArticle({users, setUsers}) {
    const articleId = useParams().article_id
    const [article, setArticle] = useState({})
    const [comments, setComments] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        getArticle(articleId).then((response) => {
            
            setArticle(response.data.article)
        })
        getComments(articleId).then((response) => {
            setComments(response.data.comments)
        })
        getUsers().then((response) => {
            setUsers(response.data.users)
            setIsLoading(false)
        })
    }, [articleId])
    const date = new Date(article.created_at).toDateString()
    if (isLoading) {
        return <div>Loading...</div>
    } else {
        return (
            <Box sx={{ 
                width: '100%' - drawerWidth, 
                bgcolor: 'background.paper',
                ml: { sm: `${drawerWidth+30}px` },
                }}>
                <img src={article.article_img_url} width="100px" alt="" />
                <Typography
                variant="h4"
                >{article.title}  
                </Typography>
                <h3>{date}</h3>
                <h3>Author: {article.author}p</h3>
                <h4>Topic: {article.topic}</h4>
                <p>{article.body}</p>
                < Comments users={users} setUsers={setUsers}/>
            </Box>
            
        );
    }
}