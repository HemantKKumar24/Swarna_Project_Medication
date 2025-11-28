// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
// import "./index.css";

// import { Provider } from "react-redux";
// import store from "./store/store";
// import { BrowserRouter } from "react-router-dom";
// import ErrorBoundary from './ErrorBoundary';

// import { enableMockAPI } from './services/mockApi';


// // Global handlers to catch errors that happen before React can render
// function showFatalError(message) {
//   const rootEl = document.getElementById('root');
//   if (rootEl) {
//     rootEl.innerHTML = `<div style="padding:20px;font-family:system-ui,Arial;background:#fff;color:#b91c1c"><h1>Fatal error</h1><pre style="white-space:pre-wrap">${String(message)}</pre></div>`;
//   }
// }

// window.addEventListener('error', (ev) => {
//   try {
//     console.error('Window error', ev.error || ev.message || ev);
//     showFatalError(ev.error && (ev.error.stack || ev.error.message) || ev.message || ev);
//   } catch {
//     // ignore
//   }
// });

// window.addEventListener('unhandledrejection', (ev) => {
//   try {
//     console.error('Unhandled rejection', ev.reason);
//     showFatalError(ev.reason && (ev.reason.stack || ev.reason.message) || ev.reason);
//   } catch {
//     // ignore
//   }
// });

// // REMOVE THIS LINE WHEN BACKEND IS READY
// enableMockAPI();

// const root = ReactDOM.createRoot(document.getElementById("root"));

// try {
//   root.render(
//     <Provider store={store}>
//       <ErrorBoundary>
//         <BrowserRouter>
//           <App />
//         </BrowserRouter>
//       </ErrorBoundary>
//     </Provider>
//   );
// } catch (err) {
//   // If rendering throws synchronously, show an inline error for quick debugging
//   // eslint-disable-next-line no-console
//   console.error('Render failed:', err);
//   const rootEl = document.getElementById('root');
//   if (rootEl) {
//     rootEl.innerHTML = `<pre style="white-space:pre-wrap;padding:16px;font-family:system-ui,Arial;background:#fff;color:#b91c1c">${String(err && (err.stack || err.message || err))}</pre>`;
//   }
// }




// frontend\src\main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './store/store';
import App from './App';
import './index.css'; // you need tailwind + base
// import { enableMockAPI } from './services/mockApi';

// // REMOVE THIS LINE WHEN BACKEND IS READY
// enableMockAPI();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
