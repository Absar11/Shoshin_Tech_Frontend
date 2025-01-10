import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/core/Sidebar';
import Navbar from './components/core/Navbar';
import Dashboard from './pages/Dashboard';
import Department from './pages/Department';
import Employee from './pages/Employee';
import Recruitment from './pages/Recruitment';
import Schedule from './pages/Schedule';
import Settings from './pages/Settings';
import Support from './pages/Support';
import PageNotFound from './pages/PageNotFound';

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 ml-16">
        <Navbar />

        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/department" element={<Department />} />
          <Route path="/employee" element={<Employee />} />
          <Route path="/recruitment" element={<Recruitment />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/support" element={<Support />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
