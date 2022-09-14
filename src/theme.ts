import { createTheme, responsiveFontSizes } from '@mui/material/styles';
// import { red } from '@mui/material/colors';

// Create a theme instance.
export const darkTheme = responsiveFontSizes(createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#f90e0e',
        },
        secondary: {
            main: '#f50057',
        },
        error: {
            main: 'purple3',
        },
    },

}));

export const lightTheme = responsiveFontSizes(createTheme({
    palette: {
        mode: 'light'
    },
}));
