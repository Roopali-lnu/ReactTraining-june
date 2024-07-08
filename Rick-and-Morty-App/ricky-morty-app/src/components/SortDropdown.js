import React from 'react';
import { FormControl, InputLabel, Select, MenuItem, Box } from '@mui/material';
import { useFilterContext } from './FilterContext';

const SortDropdown = () => {
  const { sortOrder, setSortOrder } = useFilterContext();

  return (
    <Box>
      <FormControl variant="outlined" fullWidth>
        <InputLabel>Sort by ID</InputLabel>
        <Select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)} label="Sort by ID">
          <MenuItem value="asc">Ascending</MenuItem>
          <MenuItem value="desc">Descending</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default SortDropdown;
