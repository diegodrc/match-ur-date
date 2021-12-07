import theme from '../Theme';

const styles = {
    outer: {
        display: 'flex',
        maxWidth: 'fit-content',
        flexDirection: 'column',
        alignItems: 'center'
    },
    logo: {
        maxWidth: 'fit-content',
        display: 'block',
        width: '50%'
    },
    info: {
        fontFamily: theme.typography.fontFamily,
        padding: '50px 0px',
        fontSize: '14px',
        width: '50%'
    },
    options: {
        display: 'flex',
        width: '100%',
        justifyContent: 'center'
    },
    buttons: {
        background: theme.palette.primary.button,
        color: theme.typography.lightColor,
        width: 'auto',
        justifyContent: 'space-evenly',
        textTransform: 'none',
        fontWeight: 'bold',
        borderRadius: '8px',
        margin: '0px 8px',
        fontFamily: theme.typography.fontFamily
    }
};

export default styles;
