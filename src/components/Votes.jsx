import { useState } from "react";
import * as React from 'react';
import Box from '@mui/material/Box';
import {drawerWidth} from '../components/Header'
import Typography from '@mui/material/Typography';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import { insertVotes } from "../../api";


export default function Votes({article}) {
    const [voteCount, setVoteCount] = useState(article.votes)
    const [vote, setVote] = useState('')
    const [error, setError] = useState(null)
    const handleChange = (event, newVote) => {
        let prevVote = 0
        setVote((oldVote)=>{
            prevVote = oldVote
            return newVote
        })
        insertVotes(article.article_id, newVote-prevVote).then((response)=>{
            setVoteCount(response.data.article.votes)
        })
        .catch((err) => {
          setError({err})
        })
    }
    if (error) {
      console.log(error.msg)
      return <p>Voting is not possible right now - please try again later</p>
    }
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