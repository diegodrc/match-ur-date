import React from 'react';
import {
    Button
} from '@mui/material';
import Logo from '../../assets/images/logo.png';
import styles from './Initial.styles';

const Initial = (props) => {
    // ({ setScreen }) = props;

    return (
        <div style={styles.main}>
            <div style={styles.outer}>
            <img style={styles.logo} src={Logo} alt="Dois ingressos com meio coração se completando."></img>
            <div style={styles.options}>
                <Button style={styles.buttons}>Criar sessão</Button>
                <Button style={styles.buttons}>Ingressar em sessão</Button>
            </div>
            </div>
        </div>
    );
};

export default Initial;
