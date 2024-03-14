import { useState, useEffect } from "react";
import { getTopicalArticles } from "../../api"
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import {drawerWidth} from '../components/Header'
 

export default function TopicalArticles() {
    const location = useLocation()
    const searchParams = new URLSearchParams(location.search)
    const topic = searchParams.get('topic')
    const [articles, setArticles] = useState([])

    useEffect(() => {
        getTopicalArticles(topic).then((response) => {
            setArticles(response.data.articles)
        })
    }, [topic])

        return (
        <Box sx={{ 
            width: '100%' - drawerWidth, 
            bgcolor: 'background.paper',
            ml: { sm: `${drawerWidth}px` },
            }}>
            <Typography
            variant="h4"
            sx={{ml: '70px'}}
            >
            Latest  
            </Typography>
            <nav aria-label="article list">
            <List>
            {articles.map((article) => {
                    return (
                        <ListItem key={article.article_id} disablePadding>
                        <Link to={`/articles/${article.article_id}`}>
                        <ListItemButton>
                            <ListItemAvatar>
                            <Avatar src={article.article_img_url} />
                            </ListItemAvatar>
                            <ListItemText
                            primary={article.title}
                            secondary={
                            <React.Fragment>
                            <Typography
                                component="span"
                                variant="subtitle1"
                                color="text.primary"
                            >
                                {article.author}
                            </Typography>
                            <Typography
                                component="span"
                                variant="body2"
                                color="text.secondary"
                            >
                                <br></br>
                                {article.topic}  
                            </Typography>
                            <Typography
                                component="span"
                                variant="body2"
                                color="text.secondary"
                            >
                                <br></br>
                                {article.votes} Votes &#8195;
                                {article.comment_count} Comments
                            </Typography>
                            </React.Fragment>
                            }
                            />
                        </ListItemButton>
                        </Link> 
                        </ListItem>
                    );
                })}
            </List>
            </nav>
        </Box>
        );
    }