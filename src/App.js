import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import { Main } from './pages/Main';
import { Perubahan } from './pages/Perubahan';
import { Tambah } from './pages/Tambah';
import { View } from './pages/View';
import { Cetak } from './pages/Cetak';
import { Log } from './pages/Log';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/perubahan" element={<Perubahan />}></Route>
        <Route path="/tambah" element={<Tambah />}></Route>
        <Route path="/view" element={<View />}></Route>
        <Route path="/cetak" element={<Cetak />}></Route>
        <Route path="/log" element={<Log />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
