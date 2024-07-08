import React from 'react';
import { Card, CardContent, Typography, CardMedia    } from '@mui/material';

const CharacterCard = ({ character }) => (
  <Card className="character-card">
    <CardMedia component="img" height="300" image={character.image} alt={character.name} />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">{character.name}</Typography>
      <Typography variant="body2" color="text.secondary">Species: {character.species}</Typography>
      <Typography variant="body2" color="text.secondary">Gender: {character.gender}</Typography>
      <Typography variant="body2" color="text.secondary">Origin: {character.origin.name}</Typography>
    </CardContent>
  </Card>
);

export default CharacterCard;
