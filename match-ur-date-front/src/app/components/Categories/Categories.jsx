import React from 'react';
import { useState, useRef } from 'react';
import { Card, Typography } from '@mui/material';
import Logo from '../../assets/images/logo.png';
import styles from './Categories.styles';
import SensorDoorIcon from '@mui/icons-material/SensorDoor';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import * as Constants from '../Constants';
import GenericModal from '../utils/GenericModal';
import { useDispatch } from 'react-redux';
import { changeTela } from '../../../features/tela/telaSlice';

const mockCategories = ['Ação', 'Aventura', 'Thriller', 'Suspense', 'Ficção científica'];

const Categories = () => {
    const codeRef = useRef('codeRef');
    const [chosenCategory, setChosenCategory] = useState(null);
    const [openEnterModal, setOpenEnterModal] = useState(false);
    // const [openCreateModal, setOpenCreateModal] = useState(false);
    // const [sessionCreated, setSessionCreated] = useState(false);

    const dispatch = useDispatch();

    const cancelEnterModal = () => setOpenEnterModal(false);

    // const cancelCreateModal = () => setOpenCreateModal(false);

    const enterRating = () => {
        //vai pra tela de avalição
        dispatch(changeTela('rating'));
    };

    const createSession = () => {
        dispatch(changeTela('categories'));
    };

    const enterModal = (
        <Typography sx={styles.text}>Criar sessão com a categoria ${chosenCategory}?</Typography>
    );

    return (
        <>
            <div style={styles.outer}>
            {mockCategories.map((category) =>
            <div style={styles.cardGrid}>
            <Card>{category}</Card>
            </div>)}
            </div>
            <GenericModal showButtons={true} content={enterModal} open={openEnterModal} handleCancel={cancelEnterModal} handleOk={enterRating}/>
        </>
    );
};

export default Categories;
