import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import DaftarPage from './pages/Daftar';
import LoginPage from './pages/Login';
const Routess = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/daftar' element={<DaftarPage />}></Route>
        <Route path='/login' element={<LoginPage />}></Route>
      </Routes>
    </Router>
  );
};

export default Routess;
