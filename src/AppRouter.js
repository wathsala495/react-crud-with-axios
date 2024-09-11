import React from 'react'
import { BrowserRouter, Routes,Route,Router } from 'react-router-dom'
import App from './App'
import Add from './Add'
import Edit from './Edit'

export default function AppRouter() {
  return (
    <div>
      

<Routes>
          <Route path='/' element={<App/>}></Route>
          <Route path='create' element={<Add/>} ></Route>
          <Route path='update/:id' element={<Edit/>} ></Route>
        </Routes>

       

      
    </div>
  )
}
