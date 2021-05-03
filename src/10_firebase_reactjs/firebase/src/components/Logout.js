import { useContext, useState } from 'react';
import { AuthContext } from '../App';
import firebase from 'firebase/app';
import "firebase/analytics";
import "firebase/auth";
import { Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Logout() {
    const [loading, setLoading] = useState(false);
    const [error, setErrors] = useState();

    const Auth = useContext(AuthContext);

    const handleForm = e => {
        e.preventDefault();

        setLoading(true);

        firebase
            .auth()
            .signOut()
            .then(res => {
                Auth.setLoggedIn(false);
                setLoading(false);
            })
            .catch(e => {
                setErrors(e.message);
            })
    }

    return (
        <div>
            <h1>Logout</h1>
            <form onSubmit={e => handleForm(e)}>
                <hr />
                <button type="submit">
                    {loading ? <Spinner role="status" animation="grow" variant="primary"/> : "Logout"}
                </button>
                <span>{error}</span>
            </form>
        </div>
    );
}

export default Logout;