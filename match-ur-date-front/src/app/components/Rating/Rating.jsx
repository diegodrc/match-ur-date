import React, { useEffect } from 'react';
import { useState, useRef } from 'react';
import { Button, Card, CardActionArea, CardMedia, CardContent, Grid, Typography } from '@mui/material';
import Logo from '../../assets/images/logo.png';
import styles from './../Initial/Initial.styles';
import SensorDoorIcon from '@mui/icons-material/CheckCircle';
import AddCircleIcon from '@mui/icons-material/Cancel';
import * as Constants from '../Constants';
import GenericModal from '../utils/GenericModal';
import { useDispatch } from 'react-redux';
import { changeTela } from '../../../features/tela/telaSlice';
import { changeMovie } from '../../../features/movie/movieSlice';
import theme from '../Theme';
import { getMovie } from '../../../services';
import { useSelector } from 'react-redux';
import { selectCode } from '../../../features/code/codeSlice';

const mockMovies = ['À Espera de Um Milagre', 'A Origem', 'A Chegada', 'O Quinto Elemento'];

const Rating = () => {
    const [movie, setMovie] = useState(0);
    const code = useSelector(selectCode);

    const dispatch = useDispatch();

    // const cancelCreateModal = () => setOpenCreateModal(false);
    
    const showMatch = () => {
      dispatch(changeMovie(mockMovies[movie]));
      dispatch(changeTela('match'));
    };

    const goToNextMovie = () => {
      setMovie(prevState => prevState + 1);
    };

    useEffect(() => {
      getMovie(code ,'1').then(res => setMovie(res.data.movie));
    }, [])

    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '50px' }}>
          <Typography variant="h4" style={{ fontFamily: theme.typography.fontFamily }}>Você gostaria de assistir a esse filme?</Typography>
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
          <div style={styles.options}>
            <Button startIcon={<AddCircleIcon />} size="large" variant="contained" sx={styles.buttons} style={{ background: 'green', marginTop: '20px' }} onClick={showMatch}>Sim</Button>
            <Button startIcon={<SensorDoorIcon />} size="large" variant="contained" sx={styles.buttons} style={{ background: 'red', marginTop: '20px' }} onClick={goToNextMovie}>Não</Button>
          </div>
        </div>
    );
};

export default Rating;
