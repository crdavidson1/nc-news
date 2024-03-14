import { useState } from "react";
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import { insertComment } from "../../api";

export default function InsertComment({article_id, username, setIsNewData}) {
  const [newComment, setNewComment] = useState('')
  function handlePost(event) {
    event.preventDefault()
    console.log(article_id)
    insertComment(article_id, newComment, username).then(() =>{
      setNewComment('')
      setIsNewData(true)
    })
  }
  function handleInput(event) {
    setNewComment(event.target.value)
  }
    return (
        <Box
          component="form"
          noValidate
          autoComplete="off"
        >
        <TextField
          value={newComment}
          onChange={handleInput}
          id="outlined-multiline-static"
          label="Comment..."
          multiline
          rows={4}
          fullWidth
        />
        <Button variant="contained" endIcon={<SendIcon />} onClick={handlePost}>
          Post Comment
        </Button>
        </Box>
      );
      
}