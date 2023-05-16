import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';


const Login = () => {
    const { signIn } = useContext(AuthContext);
    const handleSignIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = event.target.email.value;
        const password = event.target.password.value;
        signIn(email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
                form.reset();

            })
            .catch((error) => {
                console.log(error);
            });



    }
    return (
        <div>
            <div>
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col ">
                        <div className="text-center lg:text-left">
                            <h1 className="text-4xl font-bold">Please Login!</h1>

                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                            <form className="card-body" onSubmit={handleSignIn}>
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
                                        <Link to="/register" className="label-text-alt link link-hover">
                                            New Here?</Link>
                                    </label>
                                </div>
                                <div className="form-control mt-4">
                                    <button className="btn btn-primary">Login</button>
                                </div>
                                <div className="form-control mt-4">
                                    <button className="btn btn-success">Google Login</button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;