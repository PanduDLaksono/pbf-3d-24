import {Link} from 'react-router-dom';
import routes from './routes';

const Header = () =>(
    <ul className="nav">
        {routes.map((route, i)=>(
            <li key={1}>
                <Link to ={route.path}>{route.name}</Link>
            </li>
        ))}
    </ul>
);

export default Header;