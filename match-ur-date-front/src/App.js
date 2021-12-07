import theme from './app/components/Theme';
import React from 'react';
import { useState, useEffect } from 'react';
// import {MuiThemeProvider} from "@material-ui/styles";
// import theme from '../components//Theme';
import Initial from './app/components/Initial/Initial';

const App = () => {
    const [ screen, setScreen ] = useState();

    useEffect(() => {
      setScreen('initial');
    }, []);

    const style = {  
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      minHeight: '100vh',
      background: theme.palette.primary.main,
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
    };

    return (
        // <MuiThemeProvider theme={theme}>
        <div style={style}>
          {screen === 'initial' && (
            <Initial setScreen={setScreen} />
          )}
        </div>
        // </MuiThemeProvider>
    );
};
export default App;
