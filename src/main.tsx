import { Routes, Route } from 'react-router-dom';
import SignUp from './components/signup';
import Login from './components/login';
import Home from './components/LandingPage';
const Main = () => {
return (         
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/login' element={<Login />} />
    <Route path='/signup' element={<SignUp />} />
  </Routes>
);
}
export default Main;

