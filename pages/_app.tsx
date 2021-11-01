import type { AppProps } from 'next/app'
import '../styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';

function MyApp({ Component, pageProps }: AppProps) {
  const colors = {
    bg: '#012d5e',
    fontColor: '#ffffff',
    opnBlue: '#5882E3',
    opnLightBlue: '#254870',
    opnYellow: '#ffc107',
    opnRed: '#dc3545',
    opnWhite: '#ffffff',
  };
  const theme = extendTheme({ colors });

 return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp
