import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Beranda from './Beranda';
import TentangSaya from './TentangSaya';
import Karya from './Karya';
import Kontak from './Kontak';


function Utama() {
    return (
        <div>
            <Routes>
                <Route exact path="/" element={<Beranda/>} />
                <Route path="/TentangSaya" element={<TentangSaya/>} />
                <Route path="/Karya" element={<Karya/>} />
                <Route path="/Kontak" element={<Kontak/>} />
            </Routes>
        </div>
    )
}

export default Utama