import React from 'react';
import LoginPage from './pages/AuthPages/LoginPage'
import "./App.css"
import LaptopViewSignUp from './pages/AuthPages/LaptopViewSignUp'
import MobileViewSignUp from './pages/AuthPages/MobileViewSignUp'
import ProfileCreation from "./components/ProfileCreation";
import PetProfile from './components/PetProfile';
import LandingPage from './components/LandingPage';

function App() {
  return (
   <div className='w-full h-full '>
   {/* <ProfileCreation /> */}
   {/* <LoginPage /> */}
   {/* <LaptopViewSignUp /> */}
   {/* <MobileViewSignUp /> */}
   {/* <PetProfile /> */}
<LandingPage />
   </div>
  );
}

export default App;
