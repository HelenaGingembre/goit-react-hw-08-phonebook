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
    accent: '#4298f9',
    hover: 'linear-gradient(rgb(93, 196, 255), rgb(255, 250, 102))',
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
