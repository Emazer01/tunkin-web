import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import { Main } from './pages/Main';
import { Perubahan } from './pages/Perubahan';
import { Tambah } from './pages/Tambah';
import { View } from './pages/View';
import { Cetak } from './pages/Cetak';
import { Log } from './pages/Log';
import { Satker } from './pages/Satker';
import { Index } from './pages/Index';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/perubahan" element={<Perubahan />}></Route>
        <Route path="/tambah" element={<Tambah />}></Route>
        <Route path="/view" element={<View />}></Route>
        <Route path="/cetak" element={<Cetak />}></Route>
        <Route path="/cetak/satker" element={<Satker />}></Route>
        <Route path="/log" element={<Log />}></Route>
        <Route path="/index" element={<Index />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
