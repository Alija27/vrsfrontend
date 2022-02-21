import './App.css';

import { Header } from './components/admin/layouts/Header';
import { Sidebar } from './components/admin/layouts/Sidebar';

function App() {
  return (
    <div className="App">
      <Header/>
      <Sidebar/>
    </div>
  );
}

export default App;
