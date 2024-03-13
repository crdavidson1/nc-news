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
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import ViewQuiltIcon from '@mui/icons-material/ViewQuilt';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import { insertVotes } from "../../api";


export default function Votes({article}) {
    const [voteCount, setVoteCount] = useState(article.votes)
    const [vote, setVote] = useState('')
    const handleChange = (event, newVote) => {
        let prevVote = 0
        setVote((oldVote)=>{
            prevVote = oldVote
            return newVote
        })
        insertVotes(article.article_id, newVote-prevVote).then((response)=>{
            console.log(response.data.article)
            setVoteCount(response.data.article.votes)
        })
    }
    console.log(voteCount)
    return (
        <Box sx={{ 
            width: '100%' - drawerWidth, 
            bgcolor: 'background.paper',
            ml: { sm: `${drawerWidth+30}px`},
            }}>
            <ToggleButtonGroup
        orientation="vertical"
        value={vote}
        exclusive
        onChange={handleChange}
      >
        <Typography>{voteCount}</Typography>
        <ToggleButton value={1} aria-label="Upvote">
          <ThumbUpIcon />
        </ToggleButton>
        <ToggleButton value={-1} aria-label="Downvote">
          <ThumbDownIcon />
        </ToggleButton>
      </ToggleButtonGroup>  
        </Box>
      );
}