
// Importáljuk az App.css fájlt, amely az App komponens stílusait tartalmazza
import './App.css';

import Book from './Book';

// Definiáljuk az App komponenst, amely a fő komponens lesz a React alkalmazásban
function App() {
  return (
    // A gyökér div, amely az "App" osztályt használja a stílusokhoz
    <div className="App">
      <Book title="Avatár" />
      <Book title="Kis herceg" />
    </div>
  );
}

// Az App komponens exportálása, hogy más fájlokban is használható legyen
export default App;
