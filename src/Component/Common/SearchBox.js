import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBox() {
  return (
    <Paper
      component="form"
      sx={{ p: '1px 2px', background:'black', color:'white' ,  display: 'flex', alignItems: 'center', width: 200 }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 , color:'white' }}
        placeholder="Search"
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon sx={{color:'white'}} />
      </IconButton>
    </Paper>
  );
}