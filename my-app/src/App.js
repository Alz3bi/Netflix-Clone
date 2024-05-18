import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';

function App() {
  return (
   <>
   <Routes>
        <Route path='/' element={<Home/>}></Route>
      </Routes>
   </>
  );
}

export default App;
