import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Componant/Login';
import UserList from './Componant/UserList';

const App = () => {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/UserList" element={<UserList />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App