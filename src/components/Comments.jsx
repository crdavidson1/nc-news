import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as React from 'react';
import { getComments, getUsers } from "../../api";
import Box from '@mui/material/Box';
import {drawerWidth} from '../components/Header'
import DeleteComment from './DeleteComment'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

export default function Comments({ username, isNewData, setIsNewData}) {
    const [users, setUsers] = useState([])
    const [comments, setComments] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const articleId = useParams().article_id
    useEffect(() => {
        setIsLoading(true)
        getComments(articleId).then((response) => {
            setComments(response.data.comments)
        })
        getUsers().then((response) => {
            setUsers(response.data.users)
            setIsLoading(false)
        })
        setIsNewData(false)
    }, [articleId, isNewData])
    if (isLoading) {
        return <div>Loading...</div>
    } else if (comments.length<1) {
        return <Typography variant='h4'>This article does not yet have any comments</Typography>
    } else {
        return (
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
                        <DeleteComment 
                        comment={comment} setIsNewData={setIsNewData} username={username}/>
                        </ListItem>
                    );
                })}
            </List>
            </nav>
        </Box>
        )
    }
}