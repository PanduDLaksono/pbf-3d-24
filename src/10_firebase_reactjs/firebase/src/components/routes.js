import Register from './Register';
import Login from './Login';
import Logout from './Logout';

const routes =[
    {name : "Register", path : "/", exact : true, main : ()=> <Register/>},
    {name : "Login", path : "/login", exact : true, main : ()=> <Login/>},
    {name : "Logout", path : "/logout", exact : true, main : ()=> <Logout/>}
]

export default routes;