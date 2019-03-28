import { createMuiTheme } from '@material-ui/core';
import { teal } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: teal[500],
    },
  },
  typography: {
    useNextVariants: true,
    fontFamily: [
      'Roboto',
      'Montserrat',
    ].join(','),
    // fontSize: {},
    // headline: {},
    // title: {},
    // subheading: {},
    // body1: {},
    // body2: {},
    // caption: {},
    // button: {},
    // h1: {},
    h3: {
      fontFamily: '"Open sans", sans-serif',
      fontSize: '2.8rem',
      fontWeight: 800,
      textAlign: 'center',
      textTransform: 'capitalize',
      color: '#00796b',
      marginBottom: '12px',

    },
    h4: {
      fontFamily: '"Open sans", sans-serif',
      fontSize: '1.8rem',
      fontWeight: 700,
      textAlign: 'center',
      textTransform: 'capitalize',
      color: '#00796b',
      marginBottom: '12px',
    },
    h6: {
      fontFamily: '"Open sans", sans-serif',
      fontWeight: 400,
      fontSize: '12px',
      fontHeight: '1.8em',
      textAlign: 'left',
      color: '#00796b',
    },
    body1: {
      fontFamily: '"Open Sans", sans-serif',
      fontWeight: 400,
      fontSize: '14px',
      textAlign: 'justify',
      lineHeight: '2.0em',
      color: '#407272',
    },
    body2: {
      fontfamily: '"Open Sans", sans-serif',
      fontWeight: 400,
      fontSize: '12px',
      textAlign: 'justify',
      lineHeight: '1.8em',
      color: '#407272',
    },
    caption: {
      fontfamily: '"Open Sans", sans-serif',
      fontWeight: 400,
      fontSize: '10px',
      textAlign: 'center',
      textTransform: 'uppercase',
      lineHeight: '1.2em',
      color: '#fff',
    }
  },
});

export default theme;
