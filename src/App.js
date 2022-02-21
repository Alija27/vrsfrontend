import './App.css';
import { Admin } from './Admin';


import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/> */}
          <Route path="/admin/*" element={<Admin/>}/>
          </Routes>
          </BrowserRouter>
      
    </div>
  );
}

export default App;
