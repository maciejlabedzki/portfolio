import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

// :: Pages
import App from './pages/App/App';

// :: Style
import "./styles/index.css";
  
const rootElement = document.getElementById('root');
const root = createRoot(rootElement); 

root.render(
<StrictMode>
    <App />
</StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
