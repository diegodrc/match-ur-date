import React from 'react';
import { useState, useRef } from 'react';
import { Button, Card, CardActionArea, CardMedia, CardContent, Grid, Typography } from '@mui/material';
import Logo from '../../assets/images/logo.png';
import styles from '../Initial/Initial.styles';
import SensorDoorIcon from '@mui/icons-material/CheckCircle';
import AddCircleIcon from '@mui/icons-material/Cancel';
import * as Constants from '../Constants';
import GenericModal from '../utils/GenericModal';
import { useDispatch } from 'react-redux';
import { changeTela } from '../../../features/tela/telaSlice';
import theme from '../Theme';
import { selectMovie } from '../../../features/movie/movieSlice';
import { useSelector } from 'react-redux';

const Rating = () => {
    const movie = useSelector(selectMovie);

    const dispatch = useDispatch();
    
    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '50px' }}>
            <Typography variant="h4" style={{ fontFamily: theme.typography.fontFamily }}>É um match!!!</Typography>
            <Typography gutterBottom variant="h6" component="div">
O filme escolhido por você e sua dupla é:          </Typography>
    <Card sx={{ maxWidth: 345, margin: 3 }}>
        <CardMedia
          component="img"
          image="https://i0.wp.com/jardimpamplonashopping.com.br/wp-content/uploads/2020/03/image-from-rawpixel-id-94019-original_Easy-Resize.com_.jpg?fit=884%2C590&ssl=1"
        />
          <Typography gutterBottom variant="h5" component="div" sx={{ mt: 1 }}>
            {movie}
          </Typography>
    </Card>
        </div>
    );
};

export default Rating;
