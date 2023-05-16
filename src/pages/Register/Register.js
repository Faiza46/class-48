import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';

const Register = () => {
    const { createUser, GoogleLogin } = useContext(AuthContext);
    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        createUser(email, password)
            .then(results => {
                const user = results.user;
                console.log(user);
            })
            .catch((error) => {
                console.log(error);

            });


    }
    const handleGoogleLogin = () => {
        GoogleLogin()
            .then(results => {
                const user = results.user;
                console.log(user);
            })
            .catch((error) => {
                console.log(error);

            });


    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-4xl font-bold">Please Register!</h1>

                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                        <form className="card-body" onSubmit={handleRegister}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="type your name"
                                    className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email Address</span>
                                </label>
                                <input type="email" name="email" placeholder="type your email address" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="type a password" className="input input-bordered" required />
                                <label className="label">
                                    <Link to="/login" className="label-text-alt link link-hover">
                                        Already have account?</Link>
                                </label>
                            </div>
                            <div className="form-control mt-4">
                                <button className="btn btn-primary">Register</button>
                            </div>
                            <div className="form-control mt-4">
                                <button onClick={handleGoogleLogin} className="btn btn-success">Google Login</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;