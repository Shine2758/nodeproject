import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Doctors from './Pages/Doctors';
import Login from './Pages/Login';
import About from './Pages/About';
import Contact from './Pages/Contacts';
import MyProfile from './Pages/MyProfile';
import MyAppointements from './Pages/MyAppointments';
import Appointments from './Pages/Appointments';
import Navbar from './Components/Navbar';

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/doctors' element={<Doctors />} />
        <Route path='/doctors/:speciality' element={<Doctors />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/my-profile' element={<MyProfile />} />
        <Route path='/my-appointments' element={<MyAppointements />} />
        <Route path='/appointments' element={<Appointments />} />
      </Routes>
    </div>
  );
};

export default App;
