import styles from './Categories.styles';
import GenericModal from '../utils/GenericModal';
import { selectGenres, setGenres } from '../../../features/genres/genresSlice';
import { Card, CardActionArea, CardMedia, CardContent, Grid, Typography } from '@mui/material';
import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGenres, createSession as createSessionService} from '../../../services';
import { changeTela } from '../../../features/tela/telaSlice';
import theme from '../Theme';

const Categories = () => {
    const codeRef = useRef('codeRef');
    const [chosenCategory, setChosenCategory] = useState(null);
    const [openEnterModal, setOpenEnterModal] = useState(false);
    const genres = useSelector(selectGenres);
    // const [openCreateModal, setOpenCreateModal] = useState(false);
    // const [sessionCreated, setSessionCreated] = useState(false);

    const dispatch = useDispatch();

    const cancelEnterModal = () => setOpenEnterModal(false);

    // const cancelCreateModal = () => setOpenCreateModal(false);
    
    const createSession = (category) => {
      createSessionService(category).then(res => console.log(res));
        // dispatch(changeTela('rating'));
    };

    const enterModal = (
        <Typography sx={styles.text}>Criar sessão com a categoria ${chosenCategory}?</Typography>
    );

    useEffect(() => {
      getGenres().then(res => {dispatch(setGenres(res.data))});
    }, []);
    

    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', marginTop: '50px' }}>
            <Typography variant="h4" style={{ fontFamily: theme.typography.fontFamily }}>Escolha uma categoria para começar:</Typography>
            <Grid container spacing={2} sx={{ p: 8, justifyContent: 'center' }}>
            {Object.keys(genres).map((key, index) =>
              <Grid item xs={8} sx={{ maxWidth: 345 }}>
                <Card onClick={() => createSession(genres[key])} sx={{ maxWidth: 345, minHeight: '100%' }}>
                  <CardActionArea sx={{ height: '100% '}}>
                    <CardMedia
                      component="img"
                      image="https://i0.wp.com/jardimpamplonashopping.com.br/wp-content/uploads/2020/03/image-from-rawpixel-id-94019-original_Easy-Resize.com_.jpg?fit=884%2C590&ssl=1"
                    />
                      <Typography gutterBottom variant="h5" component="div"  style={{ fontFamily: theme.typography.fontFamily, marginTop: '6px' }}>
                        {genres[key]}
                      </Typography>
                  </CardActionArea>
                </Card>
              </Grid>)
            }
            </Grid>
            <GenericModal showButtons={true} content={enterModal} open={openEnterModal} handleCancel={cancelEnterModal} handleOk={createSession}/>
        </div>
    );
};

export default Categories;
