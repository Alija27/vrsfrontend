import './App.css';
import { Admin } from './Admin';

/* import axios from 'axios'; */
import {BrowserRouter,Routes,Route} from 'react-router-dom';
/* import UserContext from './UserContext';
import { useEffect, useState } from 'react'; */

function App() {
  /* const [user, setUser] = useState({});
  const [token, setToken] = localStorage.getItem('token');

  function fetchUser() {
    axios.get('http://locahost:8000/api/user', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }).then(res => {
      setUser(res.data);
    }).catch(err => {
      setUser({'error': true});
    })
  }

  useEffect(() => {
    fetchUser();
  }, []);
 */
  return (
    <div className="App">
      
      {/* <UserContext.Provider value={[user, fetchUser]}> */}
        <BrowserRouter>
          <Routes>
            {/* <Route path="/about" element={<About/>}/> */}
            <Route path="/admin/*" element={<Admin/>}/>
            </Routes>
        </BrowserRouter>
     {/*  </UserContext.Provider> */}
    </div>
  );
}

export default App;
