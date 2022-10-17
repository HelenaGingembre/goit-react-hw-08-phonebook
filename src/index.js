import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { App } from './components/App/App.jsx';
import './index.css';

const theme = {
  colors: {
    black: 'black',
    blue_ciel: 'rgb(230, 243, 250)',
    white: 'white',
    gray: 'rgb(204, 204, 204)',
    accent: '#4298f9',
    hover: 'linear-gradient(rgb(93, 196, 255), rgb(255, 250, 102))',
  },
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
