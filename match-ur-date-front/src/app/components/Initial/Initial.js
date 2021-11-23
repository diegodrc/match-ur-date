import React from 'react';
import {
    Card
} from '@mui/material';
import Logo from '../../assets/images/logo.png';
import styles from './Initial.styles';

const Initial = (props) => {
    // ({ setScreen }) = props;

    return (
        <div style={styles.main}>
            <img style={styles.logo} src={Logo} alt="Dois ingressos com meio coração se completando."></img>
            <div style={styles.options}>
                <Card sx={{ p: '10%' }}><span>Criar sessão</span></Card>
                <Card sx={{ p: '10%' }}><span>Ingressar em sessão</span></Card>
            </div>
        </div>
    );
};

export default Initial;
