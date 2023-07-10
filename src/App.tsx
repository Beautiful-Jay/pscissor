import React from 'react';
import { Link} from 'react-router-dom';
import Main from './main';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
       <>  
        <div>
          <nav>
            <Link to='/'>Home</Link>
            <Link to='/URL'>My URLs</Link>
            <Link to='/features'>Features</Link>
            <Link to='/pricing'>Pricing</Link>
            <Link to='/analytics'>Analytics</Link>
            <Link to='/FAQ'>FAQs</Link>
            <Link to='/login'>Login</Link>
            <Link to='/trial'>Try for free</Link>
            </nav>
          <hr />
          <Main /> 
          <Footer />      
        </div>   
      </>
    </div>
  );
  }

export default App;
