import React from 'react';
import { Button, Typography } from '@mui/material';
import Logo from '../../assets/images/logo.png';
import styles from './Initial.styles';
import SensorDoorIcon from '@mui/icons-material/SensorDoor';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import * as Constants from '../Constants';

const Initial = (props) => {
    // ({ setScreen }) = props;

    return (
        <>
            <div style={styles.outer}>
            <img style={styles.logo} src={Logo} alt={Constants.logoDescription}></img>
            <Typography style={styles.info}>{Constants.systemDescription}</Typography>
            <div style={styles.options}>
                <Button startIcon={<AddCircleIcon />} variant="contained" style={styles.buttons}>Criar sessão</Button>
                <Button startIcon={<SensorDoorIcon />} variant="contained" style={styles.buttons}>Ingressar em sessão</Button>
            </div>
            </div>
        </>
    );
};

export default Initial;
