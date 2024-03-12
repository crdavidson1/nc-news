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


export default function SingleArticle({users, setUsers}) {
    const articleId = useParams().article_id
    const [article, setArticle] = useState({})
    const [comments, setComments] = useState([])
    useEffect(() => {
        getArticle(articleId).then((response) => {
            
            setArticle(response.data.article)
        })
        getComments(articleId).then((response) => {
            setComments(response.data.comments)
        })
        getUsers().then((response) => {
            setUsers(response.data.users)
        })
    }, [])
    const date = new Date(article.created_at).toDateString()
    if (!users) {
        return <div>Loading...</div>
      }
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
            <Box sx={{ 
        width: '100%' - drawerWidth, 
        bgcolor: 'background.paper',
        }}>
        
        <br></br>
        <Typography
          variant="h4"
          sx={{ml: '70px'}}
        >
          Comments  
        </Typography>
        <br></br>
        <Divider></Divider>
        <nav aria-label="article list">
          <List>
          {comments.map((comment) => {
                return (
                    <ListItem key={comment.comment_id} disablePadding>
                      <ListItemButton>
                        <ListItemAvatar>
                            <Avatar src={users.filter((user)=>{
                                return user.username === comment.author
                            })[0].avatar_url} />
                        </ListItemAvatar>
                        <ListItemText
                        primary={comment.author}
                        secondary={
                          <React.Fragment>
                          <Typography
                            component="span"
                            variant="subtitle1"
                            color="text.primary"
                          >
                            {comment.body}
                          </Typography>
                          <Typography
                            component="span"
                            variant="body2"
                            color="text.secondary"
                          >
                            <br></br>
                            {comment.votes}  
                          </Typography>
                        </React.Fragment>
                          }
                        />
                      </ListItemButton>
                    </ListItem>
                );
            })}
          </List>
        </nav>
      </Box>
        </Box>
        
      );
}