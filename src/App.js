import React from 'react';
import LoginPage from './components/LoginPage'
import "./App.css"
import LaptopViewSignUp from './components/LaptopViewSignUp';
import MobileViewSignUp from "./components/MobileViewSignUp";
import ProfileCreation from "./components/ProfileCreation";
import PetProfile from './components/PetProfile';

function App() {
  return (
   <div className='w-full h-full'>
   {/* <ProfileCreation /> */}
   {/* <LoginPage /> */}
   {/* <LaptopViewSignUp /> */}
   {/* <MobileViewSignUp /> */}
   <PetProfile />
   </div>
  );
}

export default App;
