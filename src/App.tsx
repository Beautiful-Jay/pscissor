import React from 'react';
import { Link} from 'react-router-dom';
import Main from './main';
import './App.css';

function App() {
  return (
    <div className="App">
       <>  
        <div>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/login'>Login</Link></li>
            <li><Link to='/signup'>SignUp</Link></li>
          <hr />
          <Main />       
        </div>   
      </>
    </div>
  );
  }

export default App;
