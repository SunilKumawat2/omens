import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import "../src/assets/css/style.css";
import "../src/assets/css/responsive.css";
import "../src/assets/css/demo-1.css";
import "../src/assets/css/vendor/gicons.css";
import "../src/assets/css/vendor/gicons.css";
import "../src/assets/css/plugins/animate.css";
import "../src/assets/css/plugins/nouislider.css";
import "../src/assets/css/plugins/owl.carousel.min.css";
import "../src/assets/css/plugins/owl.theme.default.min.css";
import "../src/assets/css/plugins/slick.min.css";
import "../src/assets/css/plugins/swiper-bundle.min.css";
import '@fontsource/poppins'; // Defaults to weight 400
import '@fontsource/poppins/400.css'; // Explicitly import weights as needed
import '@fontsource/poppins/700.css'; // Example for bold weights


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
);


