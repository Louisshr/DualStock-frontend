import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from "./components/navbar/Navbar";
import Homepage from "./components/homepage/Homepage";
import SharedLayout from './components/sharedLayout/SharedLayout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout/>}>
          <Route index element={<Homepage/>}></Route>
        </Route>
      </Routes>          
    </BrowserRouter>
  );
}

export default App;
