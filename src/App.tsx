import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import SideMenu from './components/SideMenu';
import styles from './index.module.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Vehicles } from './pages/Vehicles';
import { NotFound } from './pages/NotFound';
import { AddVehicle } from './pages/AddVehicle';
import { ComponentsTest } from './pages/ComponentsTest';
import { ReservationCalendar } from './pages/ReservationCalendar';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <SideMenu />
        <main className={styles.main}>
          <Routes>
            <Route path="vehicles" element={<Vehicles />} />
            <Route path="add-vehicle" element={<AddVehicle />} />
            <Route path="calendar" element={<ReservationCalendar />} />
            <Route path="settings" element={<ComponentsTest />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
