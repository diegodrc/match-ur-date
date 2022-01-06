import React from 'react';
import { useState, useRef } from 'react';
import { Button, Card, CardActionArea, CardMedia, CardContent, Grid, Typography } from '@mui/material';
import Logo from '../../assets/images/logo.png';
import styles from './Initial.styles';
import styles from './Rating.styles';
import SensorDoorIcon from '@mui/icons-material/SensorDoor';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import * as Constants from '../Constants';
import GenericModal from '../utils/GenericModal';
import { useDispatch } from 'react-redux';
import { changeTela } from '../../../features/tela/telaSlice';
import theme from '../Theme';

const mockMovies = ['À Espera de Um Milagre', 'A Origem', 'A Chegada', 'O Quinto Elemento'];

const Rating = () => {
    const [movie, setMovie] = useState(0);

    const dispatch = useDispatch();

    const cancelEnterModal = () => setOpenEnterModal(false);

    // const cancelCreateModal = () => setOpenCreateModal(false);
    
    const showMatch = () => {
        dispatch(changeTela('match'));
    };

    const enterModal = (
        <Typography sx={styles.text}>Criar sessão com a categoria ${chosenCategory}?</Typography>
    );

    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', marginTop: '50px' }}>
            <Typography variant="h4" style={{ fontFamily: theme.typography.fontFamily }}>Você gostaria de assistir a esse filme?</Typography>
    <Card sx={{ maxWidth: 345, maxWidth: '100%', minHeight: '100%' }}>
        <CardMedia
          component="img"
          image="https://i0.wp.com/jardimpamplonashopping.com.br/wp-content/uploads/2020/03/image-from-rawpixel-id-94019-original_Easy-Resize.com_.jpg?fit=884%2C590&ssl=1"
        />
          <Typography gutterBottom variant="h5" component="div">
            {mockMovies[movie]}
          </Typography>
          <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            Sinopse: Eis aqui um campo para a sinopse.
          </Typography>
        </CardContent>
    </Card>
    <div style={styles.options}>
                <Button startIcon={<AddCircleIcon />} variant="contained" sx={styles.buttons} onClick={showMatch}>Sim</Button>
                <Button startIcon={<SensorDoorIcon />} variant="contained" sx={styles.buttons} onClick={goToNextMovie}>Não</Button>
            </div>
        </div>
    );
};

export default Rating;
