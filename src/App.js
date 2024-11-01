import './App.css';
import NavBar from './Components/NavBar';
import Hero from './Components/Hero';
import Home from './Components/Home';
import { Routes, Route } from "react-router-dom"
import Footer from './Components/Footer';
import AboutUs from './Components/AboutUs';
import JoinMember from './Components/JoinMember';
import ProfileScreen from './Components/ProfileScreen';
import SmallScale from './Components/SmallScale';
import MoneyRemittance from './Components/MoneyRemittance';
import WealthManagement from './Components/WealthManagement';
import MicroFinance from './Components/MicroFinance';
import EmiCalculator from './Components/EmiCalculator';

function App() {
  return (
    <>
      <div className='container'>
        <NavBar />
        <Routes>
          <Route path='/' element={<Hero />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/join' element={<JoinMember />} />
          <Route path='/update' element={<ProfileScreen />} />
          <Route path='/ss' element={<SmallScale />} />
          <Route path='/money' element={<MoneyRemittance />} />
          <Route path='/wealth' element={<WealthManagement />} />
          <Route path='/micro' element={<MicroFinance />} />
          <Route path='/cal' element={<EmiCalculator />} />
        </Routes>

      </div>
      <Footer />
    </>
  );
}

export default App;
