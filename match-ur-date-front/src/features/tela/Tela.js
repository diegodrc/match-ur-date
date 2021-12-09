import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  changeTela,
  selectTela,
} from './telaSlice';
import styles from './Tela.module.css';

export function Tela() {
  const tela = useSelector(selectTela);
  const dispatch = useDispatch();
  const [telaName, setTelaName] = useState('tela-inicial');

  return (
    <div>
      <div className={styles.row}>
        <span className={styles.value}>{tela}</span>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set tela name"
          value={telaName}
          onChange={(e) => setTelaName(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() => dispatch(changeTela(telaName))}
        >
          Mudar tela
        </button>
      </div>
    </div>
  );
}
