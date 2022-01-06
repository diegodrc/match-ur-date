import React from 'react';
import { useState, useRef } from 'react';
import { Card, CardActionArea, CardMedia, CardContent, Grid, Typography } from '@mui/material';
import Logo from '../../assets/images/logo.png';
import styles from './Categories.styles';
import SensorDoorIcon from '@mui/icons-material/SensorDoor';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import * as Constants from '../Constants';
import GenericModal from '../utils/GenericModal';
import { useDispatch } from 'react-redux';
import { changeTela } from '../../../features/tela/telaSlice';
import theme from '../Theme';

const mockCategories = ['Ação', 'Aventura', 'Thriller', 'Suspense', 'Ficção científica', 'Ação', 'Aventura', 'Thriller', 'Suspense', 'Ficção científica'];

const Categories = () => {
    const codeRef = useRef('codeRef');
    const [chosenCategory, setChosenCategory] = useState(null);
    const [openEnterModal, setOpenEnterModal] = useState(false);
    // const [openCreateModal, setOpenCreateModal] = useState(false);
    // const [sessionCreated, setSessionCreated] = useState(false);

    const dispatch = useDispatch();

    const cancelEnterModal = () => setOpenEnterModal(false);

    // const cancelCreateModal = () => setOpenCreateModal(false);
    
    const createSession = () => {
        dispatch(changeTela('rating'));
    };

    const enterModal = (
        <Typography sx={styles.text}>Criar sessão com a categoria ${chosenCategory}?</Typography>
    );

    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', marginTop: '50px' }}>
            <Typography variant="h4" style={{ fontFamily: theme.typography.fontFamily }}>Escolha uma categoria para começar:</Typography>
            <Grid container spacing={2} sx={{ p: 8, justifyContent: 'center' }}>
            {mockCategories.map((category) =>
            <Grid item xs={8} sx={{ maxWidth: '200px' }}>
    <Card onClick={() => createSession()} sx={{ maxWidth: 345, maxWidth: '100%', minHeight: '100%' }}>
      <CardActionArea sx={{ height: '100% '}}>
        <CardMedia
          component="img"
          image="https://i0.wp.com/jardimpamplonashopping.com.br/wp-content/uploads/2020/03/image-from-rawpixel-id-94019-original_Easy-Resize.com_.jpg?fit=884%2C590&ssl=1"
        />
          <Typography gutterBottom variant="h5" component="div"  style={{ fontFamily: theme.typography.fontFamily, marginTop: '6px' }}>
            {category}
          </Typography>
      </CardActionArea>
    </Card>
            </Grid>)}
            </Grid>
            <GenericModal showButtons={true} content={enterModal} open={openEnterModal} handleCancel={cancelEnterModal} handleOk={createSession}/>
        </div>
    );
};

export default Categories;
