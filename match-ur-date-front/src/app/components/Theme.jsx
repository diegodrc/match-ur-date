import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#F4F2F1',
            button: '#00B0CF',
        }
    },
    typography: {
        fontFamily: [
            'Open Sans', 'sans-serif'
        ].join(','),
        color: '#000'
    },
    spacing: 8,
});

export default theme;
