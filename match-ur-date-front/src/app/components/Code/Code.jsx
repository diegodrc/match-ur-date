import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Typography } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Logo from '../../assets/images/logo.png';
import styles from './Code.styles';
import * as Constants from '../Constants';
import { selectCode } from '../../../features/code/codeSlice';
import { changeTela } from '../../../features/tela/telaSlice';

const Code = () => {
  const code = useSelector(selectCode);
  const dispatch = useDispatch();

  const start = () => dispatch(changeTela('rating'));

  return (
      <>
          <div style={styles.outer}>
            <img style={styles.logo} src={Logo} alt={Constants.text.logo}></img>
            <Typography sx={styles.info}>{Constants.text.codigo}{code}</Typography>
            <div style={styles.options}>
                <Button startIcon={<PlayArrowIcon />} variant="contained" sx={styles.buttons} onClick={start}>{Constants.text.comecar}</Button>
            </div>
          </div>
      </>
  );
};

export default Code;
