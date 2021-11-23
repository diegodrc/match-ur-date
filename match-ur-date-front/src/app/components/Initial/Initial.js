import React from 'react';
import { Button, Typography } from '@mui/material';
import Logo from '../../assets/images/logo.png';
import styles from './Initial.styles';
import SensorDoorIcon from '@mui/icons-material/SensorDoor';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const Initial = (props) => {
    // ({ setScreen }) = props;

    return (
        <div style={styles.main}>
            <div style={styles.outer}>
            <img style={styles.logo} src={Logo} alt="Dois ingressos com meio coração se completando."></img>
            <Typography style={styles.info}>Aqui vai uma descrição de como usar o sistema</Typography>
            <div style={styles.options}>
                <Button startIcon={<AddCircleIcon />} variant="contained" style={styles.buttons}>Criar sessão</Button>
                <Button startIcon={<SensorDoorIcon />} variant="contained" style={styles.buttons}>Ingressar em sessão</Button>
            </div>
            </div>
        </div>
    );
};

export default Initial;
