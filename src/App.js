import './App.css';

import { Header } from './components/admin/layouts/Header';
import { Sidebar } from './components/admin/layouts/Sidebar';
import { Footer } from './components/admin/layouts/Footer';
import { Dashboard } from './components/admin/layouts/Dashboard';

function App() {
  return (
    <div className="App">
      <Header/>
      <Sidebar/>
      <Dashboard/>
      <Footer/>
    </div>
  );
}

export default App;
