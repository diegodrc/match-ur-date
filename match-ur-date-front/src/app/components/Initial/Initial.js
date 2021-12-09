import React from 'react';
import { useState, useRef } from 'react';
import { Button, TextField, Typography } from '@mui/material';
import Logo from '../../assets/images/logo.png';
import styles from './Initial.styles';
import SensorDoorIcon from '@mui/icons-material/SensorDoor';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import * as Constants from '../Constants';
import GenericModal from '../utils/GenericModal';

const Initial = () => {
    const codeRef = useRef('codeRef');
    const [codeError, setCodeError] = useState(false);
    const [openEnterModal, setOpenEnterModal] = useState(false);

    const cancelEnterModal = () => setOpenEnterModal(false);
    const codeErrorMessage = 'A sessão inserida não existe! Digite uma sessão válida ou crie uma nova.';

    const enterSession = () => {
        //faz requisição no banco com o codeRef.current.value e poe no mockbanco
        const mockBanco = false;
        if (mockBanco) {
            //nao sei
        } else {
            setCodeError(true);
        }
    };

    const enterModal = (
        <>
        <Typography>Insira o código da sessão:</Typography>
        <TextField error={codeError} helperText={codeError ? codeErrorMessage : ''} variant="outlined" label="Código" inputRef={codeRef}/>
        </>
    );

    return (
        <>
            <div style={styles.outer}>
            <img style={styles.logo} src={Logo} alt={Constants.text.logo}></img>
            <Typography sx={styles.info}>{Constants.text.description}</Typography>
            <div style={styles.options}>
                <Button startIcon={<AddCircleIcon />} variant="contained" sx={styles.buttons}>{Constants.text.create}</Button>
                <Button startIcon={<SensorDoorIcon />} variant="contained" sx={styles.buttons} onClick={() => setOpenEnterModal(true)}>{Constants.text.enter}</Button>
            </div>
            </div>
            <GenericModal content={enterModal} open={openEnterModal} handleClose={cancelEnterModal} handleOk={enterSession}/>
        </>
    );
};

export default Initial;
