import React from 'react';
import { Container, Typography, Box, Grid } from '@mui/material';
import { FilterProvider } from './components/FilterContext';
import FilterOptions from './components/FilterOptions';
import SearchBar from './components/SearchBar';
import SortDropdown from './components/SortDropdown';
import SelectedFilters from './components/SelectedFilters';
import CharacterList from './components/CharacterList';

const App = () => (
  <FilterProvider>
    <Container className="container">
      <Box className="app-header">
        <Typography variant="h4" className="app-title">Rick and Morty Characters</Typography>
      </Box>
      <Grid container spacing={3}>
        <Grid item xs={12} md={3}>
          <FilterOptions />
        </Grid>
        <Grid item xs={12} md={9}>
          <SelectedFilters />
          <Box className="top-bar">
            <Box className="search-bar-container">
              <SearchBar />
            </Box>
            <Box className="sort-dropdown-container">
              <SortDropdown />
            </Box>
          </Box>
          <CharacterList />
        </Grid>
      </Grid>
    </Container>
  </FilterProvider>
);

export default App;
