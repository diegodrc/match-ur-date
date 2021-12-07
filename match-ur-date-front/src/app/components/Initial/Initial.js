import React from 'react';
import { useState } from 'react';
import { Button, Typography } from '@mui/material';
import Logo from '../../assets/images/logo.png';
import styles from './Initial.styles';
import SensorDoorIcon from '@mui/icons-material/SensorDoor';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import * as Constants from '../Constants';
import Modal from '../utils/Modal';

const Initial = () => {
    const [openEnterModal, setOpenEnterModal] = useState(false);

    return (
        <>
            <div style={styles.outer}>
            <img style={styles.logo} src={Logo} alt={Constants.text.logo}></img>
            <Typography style={styles.info}>{Constants.text.description}</Typography>
            <div style={styles.options}>
                <Button startIcon={<AddCircleIcon />} variant="contained" style={styles.buttons}>{Constants.text.create}</Button>
                <Button startIcon={<SensorDoorIcon />} variant="contained" style={styles.buttons} onClick={() => setOpenEnterModal(true)}>{Constants.text.enter}</Button>
            </div>
            </div>
        </>
    );
};

export default Initial;
