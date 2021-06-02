import React from 'react';
import { render } from 'react-dom';
import App from './components/app/App';
import ThemeProvider from './components/state/ThemeProvider'

render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
