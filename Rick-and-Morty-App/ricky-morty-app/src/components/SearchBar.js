import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import { useFilterContext } from './FilterContext';

const SearchBar = () => {
  const [localSearchTerm, setLocalSearchTerm] = useState('');
  const { setSearchTerm } = useFilterContext();

  const handleSearch = () => setSearchTerm(localSearchTerm);

  return (
    <Box display="flex" alignItems="center">
      <TextField
        label="Search by name"
        variant="outlined"
        size="medium"
        value={localSearchTerm}
        onChange={(e) => setLocalSearchTerm(e.target.value)}
        fullWidth
      />
      <Button variant="contained" onClick={handleSearch} style={{ marginLeft: '10px' }}>Search</Button>
    </Box>
  );
};

export default SearchBar;
