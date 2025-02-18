import React from 'react'
import UserDetails from '../../components/UserDetails/UserDetails';

export default function FacultyDashboard() {
  const { user,id, role } = UserDetails();
  return (
    <div>FacultyDashboard
      <p>{user}</p>
      <p>{id}</p>
      <p>Role: {role}</p>
    </div>

  )
}
