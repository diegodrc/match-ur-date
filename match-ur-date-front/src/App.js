import React from 'react';
import {useEffect, useState} from 'react';
import { Tela } from './features/tela/Tela';
import './App.css';
import Initial from './app/components/Initial/Initial';

const App = () => {
  const [ screen, setScreen ] = useState();
  
  useEffect(() => {
      setScreen('initial');
    }, []);

    return (
        // <MuiThemeProvider theme={theme}>
        <div className="App">
          {screen === 'initial' && (
            <Initial setScreen={setScreen} />
          )}
        </div>
        // </MuiThemeProvider>
    );
};
export default App;
