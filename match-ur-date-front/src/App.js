import React from 'react';
import { useSelector } from 'react-redux';
import {  selectTela } from '../src/features/tela/telaSlice';
import './App.css';
import Initial from './app/components/Initial/Initial';
import Rating from './app/components/Rating/Rating';

const App = () => {
  const screen = useSelector(selectTela);
  
    return (
        // <MuiThemeProvider theme={theme}>
        <div className="App">
          {screen === 'initial' && (
            <Initial />
          )}
          {screen === 'rating' && (
            <Rating />
          )}
        </div>
        // </MuiThemeProvider>
    );
};
export default App;
