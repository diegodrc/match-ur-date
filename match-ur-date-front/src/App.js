import React from 'react';
import { useState, useEffect } from 'react';
// import {MuiThemeProvider} from "@material-ui/styles";
// import theme from '../components//Theme';
import Initial from './app/components/Initial';

const App = () => {
    const [ screen, setScreen ] = useState();

    useEffect(() => {
      setScreen('initial');
    }, []);

    return (
        // <MuiThemeProvider theme={theme}>
          screen === 'initial' && (
            <Initial setScreen={setScreen} />
          )
        // </MuiThemeProvider>
    );
};
export default App;
