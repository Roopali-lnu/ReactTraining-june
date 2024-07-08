import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import CharacterCard from "./CharacterCard";
import { fetchCharacters } from "./api";
import { useFilterContext } from "./FilterContext";

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const { searchTerm, filterSpecies, filterGender, filterOrigin, sortOrder } = useFilterContext();

  useEffect(() => {
    fetchCharacters().then((data) => setCharacters(data));
  }, []);

  const filteredCharacters = characters.filter(({ name, species, gender, origin }) =>
    name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (!filterSpecies || species === filterSpecies) &&
    (!filterGender || gender === filterGender) &&
    (!filterOrigin || origin.name === filterOrigin)
  );

  const sortedCharacters = filteredCharacters.sort((a, b) => {
    if (sortOrder === "asc") {
      return a.id - b.id;
    } else {
      return b.id - a.id;
    }
  });

  return (
    <Grid container spacing={3}>
      {sortedCharacters.map((character) => (
        <Grid key={character.id} item xs={12} sm={6} md={4} lg={3}>
          <CharacterCard character={character} />
        </Grid>
      ))}
    </Grid>
  );
};

export default CharacterList;
