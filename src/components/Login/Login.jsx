import { React, useState } from 'react'
import UserDetails from '../../components/UserDetails/UserDetails'
import { useNavigate } from 'react-router-dom';
import '../../styles/login.css'

export default function Login() {

    const { login } = UserDetails();
    const [username, setUsername] = useState('');
    const [userid, setUserid] = useState('');
    // const [userRole,setRole] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        let userRole = '';
        let redirectPath = '';

        if (username === "sample.faculty@gmail.com" && userid === "2024FA101") {
            userRole = "Faculty";
            redirectPath = '/RoleRouting/faculty';
        }
        else if (username === "sample.student@gmail.com" && userid === "2024ST101") {
            userRole = "Student";
            redirectPath = '/RoleRouting/student';
        }
        else if (username === "sample.admin@gmail.com" && userid === "2024AD101") {
            userRole = "Admin";
            redirectPath = '/RoleRouting/admin';
        }
        else {
            alert("Invalid Credentials");
            return;
        }

        login({ user: username, id: userid, role: userRole });
        console.log("Login Success");
        navigate(redirectPath);
    }

    return (
        <div className="login-page">
            <h1>Login/Sign In</h1>
            <form onSubmit={handleSubmit}>
                <label>Username:</label>
                <input type="email" placeholder="USERNAME" onChange={(e) => setUsername(e.target.value)} />
                <br />
                <label>User ID:&nbsp;&nbsp; </label>
                <input type="text" placeholder="USER_ID" onChange={(e) => setUserid(e.target.value)} />
                <br />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}
