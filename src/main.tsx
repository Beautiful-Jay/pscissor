import { Routes, Route } from 'react-router-dom';
import SignUp from './components/signup';
import Login from './components/login';
import Home from './components/LandingPage';
import backgroundImage from './pimages/backgroundImage.jpg';

const Main = () => {
return (  
  <div style={{backgroundImage:`url(${backgroundImage})` ,backgroundRepeat:'no-repeat', backgroundSize:'1440px 561px'}}>       
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/login' element={<Login />} />
    <Route path='/signup' element={<SignUp />} />
  </Routes>
  </div>
);
}
export default Main;

