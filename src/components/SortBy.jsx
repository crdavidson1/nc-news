import { useState } from "react";
import * as React from 'react';
import Box from '@mui/material/Box';
import {drawerWidth} from '../components/Header'
import Typography from '@mui/material/Typography';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { insertVotes } from "../../api";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import ListSubheader from '@mui/material/ListSubheader';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Divider } from "@mui/material";
import Button from '@mui/material/Button';

export default function SortBy({setNewSort, sortBy, setSortBy, order, setOrder})
{

    function handleSort(event) {
        setSortBy(event.target.value)
    }
    function handleOrder(event) {
        setOrder(event.target.value)
    }
    function handleSubmit() {
        if (sortBy && order) {
            setNewSort(true)
        }
    }
    return (
        <div>
            <Divider></Divider>
            <br></br>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-controlled-open-select-label">Sort By</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          value={sortBy}
          label="Sort By"
          onChange={handleSort}
        >
            <MenuItem value={''}>None</MenuItem>
          <MenuItem value={'article_id'}>Article ID</MenuItem>
          <MenuItem value={'author'}>Author</MenuItem>
          <MenuItem value={'comment_count'}>Comment Count</MenuItem>
          <MenuItem value={'created_at'}>Creation Date</MenuItem>
          <MenuItem value={'title'}>Title</MenuItem>
          <MenuItem value={'topic'}>Topic</MenuItem>
          <MenuItem value={'votes'}>Votes</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-controlled-open-select-label">Order</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          value={order}
          label="Order"
          onChange={handleOrder}
        >
            <MenuItem value={''}>None</MenuItem>
          <MenuItem value={'ASC'}>Ascending</MenuItem>
          <MenuItem value={'DESC'}>Descending</MenuItem>
        </Select>
      </FormControl>
        <Button sx={{ }} onClick={handleSubmit}>
        Sort Articles
      </Button>
          <Divider></Divider>
        </div>
      );
}