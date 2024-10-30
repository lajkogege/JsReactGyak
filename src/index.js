// Importáljuk a React könyvtárat, amely lehetővé teszi a React funkciók és a JSX használatát
import React from 'react';

// Importáljuk a ReactDOM könyvtárat, amely felelős a React elemek megjelenítéséért a böngészőben
import ReactDOM from 'react-dom/client';

// Importáljuk az index.css fájlt, amely az alkalmazás globális stílusait tartalmazza
import './index.css';

// Importáljuk az App komponenst, ami a fő alkalmazáskomponens
import App from './App';

// Importáljuk a reportWebVitals modult, amely lehetőséget ad az alkalmazás teljesítményének mérésére
import reportWebVitals from './reportWebVitals';

// Létrehozunk egy "root" (gyökér) elemet, ami az index.html-ben található 'root' ID-jú elemet célozza meg
const root = ReactDOM.createRoot(document.getElementById('root'));


// Megjelenítjük az App komponenst a root elemben, és StrictMode-ba helyezzük
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Az alkalmazás teljesítményének méréséhez a reportWebVitals funkciót használhatjuk
// Például átadhatunk egy logoló függvényt, hogy eredményeket kapjunk (pl.: reportWebVitals(console.log))
// További részletek: https://bit.ly/CRA-vitals
reportWebVitals();
