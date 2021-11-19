import React from 'react';
import { useState } from 'react';
import { MuiThemeProvider } from '@material-ui/core';
import theme from './components//Theme';
import Initial from './components/Initial';

import './assets/css/smacss';

const App = (props) => {
    const { screen, setScreen } = useState('initial');

    return (
        <MuiThemeProvider theme={theme}>
          { screen === 'initial' && (
            <Initial setScreen={setScreen} />
          )}
        </MuiThemeProvider>
    );
};
export default App;
