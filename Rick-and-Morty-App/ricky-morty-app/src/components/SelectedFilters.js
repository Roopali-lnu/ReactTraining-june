import React from "react";
import { Box, Chip, Typography } from "@mui/material";
import { useFilterContext } from "./FilterContext";

const SelectedFilters = () => {
  const { filterSpecies, filterGender, filterOrigin, clearFilter } = useFilterContext();

  return (
    <Box className="selected-filters">
      <Typography variant="h6" gutterBottom>
        Selected Filters:
      </Typography>
      {filterSpecies && (
        <Chip
          label={`Species: ${filterSpecies}`}
          onDelete={() => clearFilter("species")}
          color="primary"
          className="filter-chip"
        />
      )}
      {filterGender && (
        <Chip
          label={`Gender: ${filterGender}`}
          onDelete={() => clearFilter("gender")}
          color="primary"
          className="filter-chip"
        />
      )}
      {filterOrigin && (
        <Chip
          label={`Origin: ${filterOrigin}`}
          onDelete={() => clearFilter("origin")}
          color="primary"
          className="filter-chip"
        />
      )}
    </Box>
  );
};

export default SelectedFilters;
