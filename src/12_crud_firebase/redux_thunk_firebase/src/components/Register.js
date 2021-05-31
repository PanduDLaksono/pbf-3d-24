import { useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { registerUser } from "../redux/actions/auth";

function Register(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleForm = e => {
        e.preventDefault();

        const { dispatch } = props;
        dispatch(registerUser(email, password));
    };

    const { isRegistered, registerError, isAuthenticated } = props;

    if (isAuthenticated) {
        return <Redirect to="/" />
    } else {
        return (
            <div>
                <h1>Register</h1>
                <form onSubmit={e => handleForm(e)}>
                    <input
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        name="email"
                        type="email"
                        placeholder="email"
                        required
                    />
                    <input
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        name="password"
                        type="password"
                        placeholder="password"
                        required
                    />
                    <hr />
                    <button type="submit">Register</button>
                    <hr />
                    <span>{registerError && ("Email atau Password Salah!")}</span>
                    <span>{isRegistered && ("Sedang mendaftar ...")}</span>
                </form>
            </div>
        );
    }

}

function mapStateToProps(state) {
    return {
        isRegistered: state.auth.isRegistered,
        registerError: state.auth.registerError,
        isAuthenticated: state.auth.isAuthenticated
    }
}

export default connect(mapStateToProps)(Register);