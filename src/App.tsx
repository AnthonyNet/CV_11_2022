import React, {useState} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './pages/MainPage';
import Experience from './pages/Experience';
import Education from './pages/Education';
import Error from './pages/Error';
import './App.css'



const App:React.FC = () => {
/*
  const [language, setLanguage] = useState<string>("");

  const handleChange = (event:any) =>{
      console.log(event.target.value)
     setLanguage(event.target.value)
  }*/

  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Main />}></Route>
      <Route path='/experience' element={<Experience />}></Route>
      <Route path='/education' element={<Education />}></Route>
      <Route path='*' element={<Error />}></Route>
     </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App
