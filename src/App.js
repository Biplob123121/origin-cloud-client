import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddProject from './components/AddProject/AddProject';
import Project from './components/Header/Project/Project';
import Home from './components/Home/Home';
import MyProfile from './components/MyProfile/MyProfile';
import Register from './components/Register/Register';

function App() {
  return (
    <div style={{background : '#fafbfc'}}>
      
      <Routes>
        <Route path='/' element={<Home />}> </Route>  
        <Route path='/register' element={<Register />}> </Route> 
        <Route path='/profile' element={<MyProfile />}></Route> 
        <Route path='/project' element={<Project />}></Route> 
        <Route path='/add' element={<AddProject />}></Route> 
      </Routes>

    </div>
  );
}

export default App;
