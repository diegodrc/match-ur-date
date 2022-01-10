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
import { getMovie, likeMovie } from '../../../services';
import { useSelector } from 'react-redux';
import { selectCode } from '../../../features/code/codeSlice';
import { selectUser } from '../../../features/user/userSlice';

const mockMovies = ['À Espera de Um Milagre', 'A Origem', 'A Chegada', 'O Quinto Elemento'];

const Rating = () => {
  const [movie, setMovie] = useState({'title': '', 'backdrop_path': '', 'overview': ''});
  const [id, setId] = useState(null);
  const code = useSelector(selectCode);
  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  // const cancelCreateModal = () => setOpenCreateModal(false);
  
  const showMatch = () => {
    dispatch(changeTela('match'));
  };

  const like = () => {
    likeMovie(code, user, id).then(res => {
      if(res.data.match){
        showMatch()
      }
    });
    getMovie(code, user).then(res => {
      setMovie(res.data.movie);
      setId(res.data.id);
    });
  };

  const unlike = () => {
    getMovie(code, user).then(res => {
      setMovie(res.data.movie);
      setId(res.data.id);
    });
  };

  useEffect(() => {
    getMovie(code, user).then(res => {
      setMovie(res.data.movie);
      setId(res.data.id);
    });
  }, [])

  return (
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '50px' }}>
        <Typography variant="h4" style={{ fontFamily: theme.typography.fontFamily }}>Você gostaria de assistir a esse filme? {code}</Typography>
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
          <Button startIcon={<AddCircleIcon />} size="large" variant="contained" sx={styles.buttons} style={{ background: 'green', marginTop: '20px' }} onClick={like}>Sim</Button>
          <Button startIcon={<SensorDoorIcon />} size="large" variant="contained" sx={styles.buttons} style={{ background: 'red', marginTop: '20px' }} onClick={unlike}>Não</Button>
        </div>
      </div>
  );
};

export default Rating;
