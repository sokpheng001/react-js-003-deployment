import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import About from './pages/About.jsx'
import RootLayout from './pages/RootLayout.jsx'

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route element={<RootLayout/>}>
        <Route path='/' element={<App/>}/>
        <Route path='/about' element={<About/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
);
