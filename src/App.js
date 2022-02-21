import './App.css';

import { Header } from './components/admin/layouts/Header';
import { Sidebar } from './components/admin/layouts/Sidebar';
import { Footer } from './components/admin/layouts/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Sidebar/>
      <Footer/>
    </div>
  );
}

export default App;
