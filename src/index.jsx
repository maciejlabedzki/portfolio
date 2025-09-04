import * as Sentry from "@sentry/react";
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './i18n';
import reportWebVitals from './reportWebVitals';
import AppRouter from './router/AppRouter';
import "./styles/index.css";

Sentry.init({
    dsn: process.env.REACT_APP_SENTRY_DSN,
    environment: process.env.REACT_APP_SENTRY_ENVIRONMENT,
    // Setting this option to true will send default PII data to Sentry.
    // For example, automatic IP address collection on events
    sendDefaultPii: true
});

const rootElement = document.getElementById('root');
const root = createRoot(rootElement); 

root.render(
    <StrictMode> 
        <AppRouter />
    </StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
