import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Register from './components/Register/Register';

function App() {
  return (
    <div style={{background : '#fafbfc'}}>
      
      <Routes>
        <Route path='/' element={<Home />}> </Route>  
        <Route path='/register' element={<Register />}> </Route>  
        <Route path='/header' element={<Header />}></Route>  
      </Routes>

    </div>
  );
}

export default App;
