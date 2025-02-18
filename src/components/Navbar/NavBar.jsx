import React from 'react'
import { useNavigate } from 'react-router-dom'
import UserDetails from '../UserDetails/UserDetails';
// import '../../styles/nav.css'

export default function NavBar(userData) {
    const navigate = useNavigate();
    const { role } = UserDetails();
    return (
        <nav>
            {role===null && (
                <div>Login to continue(relaod)/If no login page reload</div>
            )}
            {role==="Student" && (
                <ul>
                    <li onClick={()=>navigate('/RoleRouting/student')}>Student Dashboard</li>
                    <li onClick={()=>navigate('/RoleRouting/home')}>Home</li>
                </ul>
            )}
            {role==='Faculty' && (
                <ul>
                    <li onClick={()=>navigate('/RoleRouting/faculty')}>Faculty Dashboard</li>
                    <li onClick={()=>navigate('/className')}>ClassName</li>
                </ul>
            )}
            {role==="Admin" && (
                <ul>
                    <li onClick={()=>navigate('/RoleRouting/admin')}>Admin Dashboard</li>
                    <li onClick={()=>navigate('/RoleRouting/management')}>Management</li>
                </ul>
            )}
        </nav>
        // <div>
        // <div className="sidebar">
        //     <div className="logo-details">
        //         <div className="logo_name">constGenius</div>
        //         <i className='bx bx-menu' id="btn"></i>
        //     </div>
        //     {role === "Student" && (
        //         <ul classNameName="nav-list">
        //             {/* <li onClick={() => navigate('/student')}>Student Dashboard</li> */}
        //             <li>
        //                 <a onClick={() => navigate('/student')}>
        //                     <i className='bx bx-grid-alt'></i>
        //                     {/* <img src='../../assets/about.png' alt="" /> */}
        //                     <span className="links_name">Student Dashboard</span>
        //                 </a>
        //                 <span className="tooltip">Student Dashboard</span>
        //             </li>
        //             {/* <li onClick={() => navigate('/home')}>Home</li> */}
        //             <li>
        //                 <a onClick={() => navigate('/home')}>
        //                     <i className='bx bx-grid-alt'></i>
        //                     <span className="links_name">Home</span>
        //                 </a>
        //                 <span className="tooltip">Home</span>
        //             </li>
        //         </ul>
        //     )}
        //     {role === 'Faculty' && (
        //         <ul>
        //             {/* <li onClick={() => navigate('/faculty')}>Faculty Dashboard</li> */}
        //             <li>
        //                 <a onClick={() => navigate('/faculty')}>
        //                     <i className='bx bx-user'></i>
        //                     <span className="links_name">Faculty Dashboard</span>
        //                 </a>
        //                 <span className="tooltip">Faculty Dashboard</span>
        //             </li>
        //             {/* <li onClick={() => navigate('/className')}>ClassName</li> */}
        //             <li>
        //                 <a onClick={() => navigate('/className')}>
        //                     <i className='bx bx-chat'></i>
        //                     <span className="links_name">ClassName</span>
        //                 </a>
        //                 <span className="tooltip">ClassName</span>
        //             </li>
        //         </ul>
        //     )}
        //     {role === "Admin" && (
        //         <ul>
        //             {/* <li onClick={() => navigate('/admin')}>Admin Dashboard</li> */}
        //             <li>
        //                 <a onClick={() => navigate('/admin')}>
        //                     <i className='bx bx-pie-chart-alt-2'></i>
        //                     <span className="links_name">Admin Dashboard</span>
        //                 </a>
        //                 <span className="tooltip">Admin Dashboard</span>
        //             </li>
        //             {/* <li onClick={() => navigate('/management')}>Management</li> */}
        //             <li>
        //                 <a onClick={() => navigate('/management')}>
        //                     <i className='bx bx-folder'></i>
        //                     <span className="links_name">Management</span>
        //                 </a>
        //                 <span className="tooltip">Management</span>
        //             </li>
        //         </ul>
        //     )}
        // </div>
    )
}
