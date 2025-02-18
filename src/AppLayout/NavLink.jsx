import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import FacultyDashboard from '../pages/FacultyDashboard/FacultyDashboard'
import StudentDashboard from '../pages/StudentBoard/StudentDashboard'
import AdminDashboard from '../pages/AdminDashboard/AdminDashboard'
import UserDetails from '../components/UserDetails/UserDetails';
import NavBar from '../components/Navbar/NavBar';
import Login from '../components/Login/Login';

export default function NavLink() {

  const { role } = UserDetails();
 
  return (
    <div>
      <NavBar />
      <Routes>
      <Route path="/RoleRouting/" element={<Login />} />
      <Route path="/RoleRouting/login" element={<Login />} />

      <Route path="/RoleRouting/faculty" element={role === "Faculty" ? (<FacultyDashboard />) : (<Login/>)} />
      <Route path="/RoleRouting/student" element={role === "Student" ? (<StudentDashboard />) : (<Login/>)} />
      <Route path="//RoleRoutingadmin" element={role === "Admin" ? (<AdminDashboard />) : (<Login/>)} />
      <Route path="*" element={null}/>
      </Routes>
    </div>
  )
}
