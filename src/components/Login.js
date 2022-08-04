import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";


function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    let navigate = useNavigate();


    const loginHandler = (e) => {
        e.preventDefault();
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                alert(`${user.email} Login SuccessFully.`);
                navigate("/dashboard");
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });

    }
    return (
        <>
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-xs-12 col-sm-10 col-md-8 col-lg-5'>
                        <form onSubmit={loginHandler}>
                            <h1 className='mt-5'>Login</h1>
                            <div className='form-group mt-5'>
                                <input type="email" className='form-control' placeholder='Enter Email' onChange={(e) => {
                                    setEmail(e.target.value)
                                }} value={email} />
                            </div>
                            <div>
                                <input type="password" className='form-control mt-2' placeholder='Enter Password' onChange={(e) => {
                                    setPassword(e.target.value)
                                }} value={password} />
                            </div>
                            <button className='btn btn-primary form-control mt-2'>Login</button>
                        </form>

                    </div>

                </div>
            </div>
        </>
    )
}

export default Login