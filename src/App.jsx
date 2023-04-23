import React, {  useEffect, useState } from 'react'
import { Route, Routes } from "react-router-dom";
import useAuthContext from './context/AuthContext';
import pages from './pages';
import Navbar from './components/layouts/Navbar'
import Footer from "./components/layouts/Footer";
import PrivateRoute from './utils/PrivateRoute';


function App() {
  const {userData, cookies, getUserToken, setLogout } = useAuthContext()


/* THIS ONE IS GETTING THE USER TOKEN ONLY IF HE LOGGED IN!! */
  useEffect(()=>{
    getUserToken()
  },[])
  
  return (
    <>
        <Navbar userData={userData} setLogout={setLogout}/>

        <main className='main-container'>
        <Routes>
          <Route element={<pages.Auth />}>
            <Route index path="/login" element={<pages.Login />} />
            <Route path="/register" element={<pages.Register />} />
          </Route>

          <Route path="/" element={<PrivateRoute> <pages.Dashboard /> </PrivateRoute>} />
          <Route element={<pages.Exercises />}>
            <Route index path='abcschema' element={ <pages.AbcSchema /> }/>
            <Route path='moodtrack' element={<pages.MoodTrack />}/>
            <Route path='gratefulness' element={<pages.Gratefulness />}/>
          </Route>
          <Route path="/statistics" element={<pages.Statistics />} />
        </Routes>
        </main>

        {cookies['auth_token'] && <Footer />}
    </>
  )
}

export default App
