import React from "react";
import { Box, FormControl, FormGroup, FormControlLabel, Checkbox, RadioGroup, Radio, Typography } from "@mui/material";
import { useFilterContext } from "./FilterContext";

const FilterOptions = () => {
  const {
    filterSpecies,
    setFilterSpecies,
    filterGender,
    setFilterGender,
    filterOrigin,
    setFilterOrigin,
  } = useFilterContext();

  const speciesOptions = ["Human", "Mytholog", "Alien"];
  const genderOptions = ["Male", "Female"];
  const originOptions = ["Unknown","Post-Apocalyptic Earth", "Nuptia-4"];

  const handleSpeciesChange = (value) => {
    if (value === "All") {
      setFilterSpecies("");
    } else {
      setFilterSpecies(value);
    }
  };

  const handleGenderChange = (value) => {
    if (value === "All") {
      setFilterGender("");
    } else {
      setFilterGender(value);
    }
  };

  const handleOriginChange = (value) => {
    if (value === "All") {
      setFilterOrigin("");
    } else {
      setFilterOrigin(value);
    }
  };

  return (
    <div>
      <Typography variant="h6" gutterBottom>
        Filters
      </Typography>
      <Box mb={3} className="filter-options">
        <FormControl component="fieldset">
          <Typography variant="subtitle1" fontWeight="bold">Species:</Typography>
          <FormGroup>
            {speciesOptions.map((option) => (
              <FormControlLabel
                key={option}
                control={<Checkbox checked={filterSpecies === option} onChange={() => handleSpeciesChange(option)} />}
                label={option}
              />
            ))}
          </FormGroup>
        </FormControl>
      </Box>
      <Box mb={3} className="filter-options">
        <FormControl component="fieldset">
          <Typography variant="subtitle1" fontWeight="bold">Gender:</Typography>
          <RadioGroup value={filterGender} onChange={(e) => handleGenderChange(e.target.value)}>
            {genderOptions.map((option) => (
              <FormControlLabel key={option} value={option} control={<Radio />} label={option} />
            ))}
          </RadioGroup>
        </FormControl>
      </Box>
      <Box mb={3} className="filter-options">
        <FormControl component="fieldset">
          <Typography variant="subtitle1" fontWeight="bold">Origin:</Typography>
          <RadioGroup value={filterOrigin} onChange={(e) => handleOriginChange(e.target.value)}>
            {originOptions.map((option) => (
              <FormControlLabel key={option} value={option} control={<Radio />} label={option} />
            ))}
          </RadioGroup>
        </FormControl>
      </Box>
    </div>
  );
};

export default FilterOptions;
