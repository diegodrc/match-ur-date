import React from 'react';
import { useState, useRef } from 'react';
import { Button, TextField, Typography } from '@mui/material';
import Logo from '../../assets/images/logo.png';
import styles from './Initial.styles';
import SensorDoorIcon from '@mui/icons-material/SensorDoor';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import * as Constants from '../Constants';
import GenericModal from '../utils/GenericModal';
import { useDispatch } from 'react-redux';
import { changeTela } from '../../../features/tela/telaSlice';

const Initial = () => {
    const codeRef = useRef('codeRef');
    const [codeError, setCodeError] = useState(false);
    const [openEnterModal, setOpenEnterModal] = useState(false);
    // const [openCreateModal, setOpenCreateModal] = useState(false);
    // const [sessionCreated, setSessionCreated] = useState(false);

    const dispatch = useDispatch();

    const cancelEnterModal = () => setOpenEnterModal(false);

    // const cancelCreateModal = () => setOpenCreateModal(false);

    const enterSession = () => {
        //faz requisição no banco com o codeRef.current.value e poe no mockbanco
        if (codeRef.current.value === 'annelinda') {
            //coloca o código no redux
            dispatch(changeTela('rating'));
        } else {
            setCodeError(true);
        }
    };

    const createSession = () => {
        dispatch(changeTela('categories'));
    };

    const enterModal = (
        <>
        <Typography sx={styles.text}>Insira o código da sessão:</Typography>
        <TextField
            inputProps={{style: styles.input}}
            size="small"
            margin="dense"
            error={codeError}
            helperText={codeError ? Constants.text.noSessionError : ''}
            variant="outlined"
            fullWidth
            inputRef={codeRef}/>
        </>
    );

    // const createModal = sessionCreated ? 
    //     <>
    //         <Typography sx={styles.text}>Copie e compartilhe o link:</Typography>        
    //         <Typography sx={styles.text}>SD3F5SG5RE4S5DGA</Typography>    
    //         <Typography sx={styles.text}>Clique OK para prosseguir para a sessão.</Typography>     
    //     </>
    //     :
    //     <Typography sx={styles.text}>Confirme a criação da sessão:</Typography>;

    return (
        <>
            <div style={styles.outer}>
            <img style={styles.logo} src={Logo} alt={Constants.text.logo}></img>
            <Typography sx={styles.info}>{Constants.text.description}</Typography>
            <div style={styles.options}>
                <Button startIcon={<AddCircleIcon />} variant="contained" sx={styles.buttons} onClick={createSession}>{Constants.text.create}</Button>
                <Button startIcon={<SensorDoorIcon />} variant="contained" sx={styles.buttons} onClick={() => setOpenEnterModal(true)}>{Constants.text.enter}</Button>
            </div>
            </div>
            <GenericModal showButtons={true} content={enterModal} open={openEnterModal} handleCancel={cancelEnterModal} handleOk={enterSession}/>
            {/* <GenericModal showButtons={!sessionCreated} content={createModal} open={openCreateModal} handleCancel={cancelCreateModal} handleOk={sessionCreated ? enterSessionCreated : createSession}/> */}
        </>
    );
};

export default Initial;
