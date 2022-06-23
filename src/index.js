import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { StyledEngineProvider } from '@mui/material/styles';

createRoot(document.getElementById('root')).render(
    <StyledEngineProvider injectFirst>
        <App />
    </StyledEngineProvider>
);