import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { App } from './components/App.jsx';
import { PersistGate } from 'redux-persist/integration/react';

import 'modern-normalize';
import './index.css';

const theme = {
  colors: {
    black: 'black',
    blue_ciel: 'rgb(230, 243, 250)',
    white: 'white',
    gray: 'rgb(204, 204, 204)',
    yellow: 'rgba(255,250,102, 1)',
    main: '#2196f3',
    secondary_color: '#333232',
    accent: 'rgba(66, 152, 249, 1)',
    bg_color: '#f0f1f3',
    inactive_color: '#808080',
    border_color: '#d4d4d4',
    small_color: '#4c527d',

    hover: 'linear-gradient(rgb(93, 196, 255), rgb(255, 250, 102))',
  },
  variables: {
    transition_duration: '250ms',
    timing_function: 'cubic-bezier(0.4, 0, 0.2, 1)',
    main_shadow: '0px 4px 4px rgb(0 0 0 / 15%)',
  },
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="/goit-react-hw-08-phonebook">
          <ThemeProvider theme={theme}>
            <App />
          </ThemeProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
