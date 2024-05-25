
import './App.css';
import {Route,Routes} from 'react-router-dom'

import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import ToDoList from './components/ToDoList.jsx';


function App() {
  return (
    <>
  <Navbar></Navbar>
  <Routes>
    <Route path='/home' element={<Home/>}/>
    <Route path='/todolist' element={<ToDoList/>}/>
  </Routes>
  

  
    
   
    </>
  );
}

export default App;
