import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#AE9672',
    },
    secondary: {
      main: '#3C3C3C',
    },
    text: {
      primary: '#F5F5F5',
      secondary: '#000000',
    },
  },
  typography: {
    fontFamily: [
      'Inter'
    ].join(','),
  },
});

theme.typography.h1 = {
  fontFamily: 'Jost'
}
theme.typography.h2 = {
  fontFamily: 'Jost',
}

theme.typography.h3 = {
  fontFamily: 'Inter',
  fontWeight: 600,
  fontSize: "16px",
  color: "black"
}

theme.typography.h4 = {
  fontFamily: 'Jost',
  fontSize: '16px',
  fontWeight: 400
}