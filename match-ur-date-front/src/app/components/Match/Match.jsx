import React, { useEffect } from 'react';
import { useState } from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import theme from '../Theme';
import { matchMovie } from '../../../services';
import { useSelector } from 'react-redux';
import { selectCode } from '../../../features/code/codeSlice';

const Rating = () => {
  const [movie, setMovie] = useState({'title': '', 'backdrop_path': '', 'overview': ''});
  
  const code = useSelector(selectCode);

  useEffect(() => {
    matchMovie(code).then(res => {
      setMovie(res.data.movie);
    });
  })
  

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '50px' }}>
      <Typography variant="h4" style={{ fontFamily: theme.typography.fontFamily }}>É um match!!!</Typography>
      <Typography gutterBottom variant="h6" component="div">
        O filme escolhido por você e sua dupla é:          
      </Typography>
      <Card sx={{ maxWidth: 345, margin: 3 }}>
        <CardMedia
        component="img"
        image={`https://image.tmdb.org/t/p/w500${movie['backdrop_path']}`}
        />
        <Typography gutterBottom variant="h5" component="div" sx={{ mt: 3 }}>
          {movie['title']}
        </Typography>
        <CardContent>
          <Typography gutterBottom component="div">
            {movie['overview']}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Rating;
