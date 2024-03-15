import { useState } from "react";
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import { deleteComment } from "../../api";

export default function DeleteComment({comment, setIsNewData, username}) {
    function handleDelete(event) {
        event.preventDefault()
        deleteComment(comment.comment_id).then(() =>{
        setIsNewData(true)
        })
    }
    if (username !== comment.author) {
        return
    }
    return (
        <Box
          component="form"
          noValidate
          autoComplete="off"
        >
        <Button variant="outlined" startIcon={<DeleteIcon />} onClick={handleDelete} color='error'>
          Delete Comment
        </Button>
        </Box>
      );
      
}