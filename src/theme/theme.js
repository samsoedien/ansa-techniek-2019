import { createMuiTheme } from '@material-ui/core';
import { teal } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#00BCD4',
    },
    secondary: {
      main: '#fff',
    }
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
    h2: {
      fontFamily: '"Nunito", sans-serif', 
    },
    h3: {
      fontFamily: '"lato", sans-serif',
      fontSize: '2.8rem',
      fontWeight: 600,
      textAlign: 'left',
      textTransform: 'uppercase',
      color: 'rgba(0, 181, 204, 1)',
      marginBottom: '18px',

    },
    h4: {
      fontFamily: '"Open sans", sans-serif',
      fontSize: '1.8rem',
      fontWeight: 700,
      textAlign: 'left',
      textTransform: 'capitalize',
      color: 'rgba(0, 181, 204, 1)',
      marginBottom: '18px',
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
      fontSize: '14px',
      lineHeight: '1.8em',
    },
    caption: {
      fontfamily: '"Open Sans", sans-serif',
      fontWeight: 400,
      fontSize: '11px',
      textTransform: 'uppercase',
      lineHeight: '1.8em',
      color: '#fff',
    }
  },
});

export default theme;
