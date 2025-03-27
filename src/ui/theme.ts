import { useColorScheme } from 'react-native';

export const lightTheme = {
    background: '#ffffff',
    card: '#f2f2f7',
    text: '#000000',
    secondaryText: '#6e6e73',
    border: '#d1d1d6',
    primary: '#1da1f2',
};

export const darkTheme = {
    background: '#000000',
    card: '#1c1c1e',
    text: '#ffffff',
    secondaryText: '#a1a1aa',
    border: '#2c2c2e',
    primary: '#1da1f2',
};

export const useTheme = () => {
    const scheme = useColorScheme();
    return scheme === 'dark' ? darkTheme : lightTheme;
};