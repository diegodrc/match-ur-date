import React from 'react';
import { useSelector } from 'react-redux';
import { Typography } from '@mui/material';
import Logo from '../../assets/images/logo.png';
import styles from './Code.styles';
import * as Constants from '../Constants';
import { selectCode } from '../../../features/code/codeSlice';

const Code = () => {
  const code = useSelector(selectCode);
  console.log(code)
  return (
      <>
          <div style={styles.outer}>
          <img style={styles.logo} src={Logo} alt={Constants.text.logo}></img>
          <Typography sx={styles.info}>{Constants.text.codigo}{code}</Typography>
          </div>
      </>
  );
};

export default Code;
