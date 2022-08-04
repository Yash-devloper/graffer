import React from "react";
import { useState, useEffect } from "react";
import { auth } from "./Fire";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { db } from "./Fire";



const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState('');
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [cPasswordClass, setCPasswordClass] = useState('form-control');
  const [isCPasswordDirty, setIsCPasswordDirty] = useState(false);
  // const [user, setUser] = useState([]);

  let navigate = useNavigate();


  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log("inside onSubmitHandler");
    console.log("email", email);
    console.log("password", password)
    // firebase api call for signed in user
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        alert(`${user.email} user create successful.!`)
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });

  };

  const handleCPassword = (e) => {
    setCPassword(e.target.value);
    setIsCPasswordDirty(true);
  }

  useEffect(() => {
    if (isCPasswordDirty) {
      if (password === cPassword) {
        setShowErrorMessage(false);
        setCPasswordClass('form-control is-valid')
      } else {
        setShowErrorMessage(true)
        setCPasswordClass('form-control is-invalid')
      }
    }
  }, [cPassword])

  const logout = (e) => {
    e.preventDefault();
    auth.signOut();
    localStorage.clear();
    navigate('/');
    // .then(function(data) {
    //   console.log("da", data);
    //   // Sign-out successful.
    // }, function(error) {
    //   // An error happened.
    // });

  }

  return (
    <>

      <div className='container' >
        <div>
          <label htmlFor="Email" className="form-label h1">Create User</label>

        </div>
        <form onSubmit={onSubmitHandler}>
          <div className="mb-3">
            <label htmlFor="Email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" value={email}
              onChange={(e) => { setEmail(e.target.value) }} />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" value={password}
              onChange={(e) => { setPassword(e.target.value) }} />
          </div>
          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
            <input type="password" className={cPasswordClass} id="confirmPassword" value={cPassword}
              onChange={handleCPassword} />
          </div>
          {showErrorMessage && isCPasswordDirty ? <div> Passwords did not match </div> : ''}
          <div className="d-flex d-flex justify-content-between">
            <button type="submit" className="btn btn-primary ">Create User</button>
            <button type="submit" className="btn btn-danger " onClick={logout}>logout</button>

          </div>

        </form>

{/* 
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Email</th>
              <th scope="col">password</th>
            </tr>
          </thead>
          <tbody>
           {
              user.map((u, id)=>{
                return <tr key={id}>
                <td>{u.email}</td>
                <td>{u.password}</td>
              </tr>
              })
           } 
          </tbody>
        </table> */}
      </div>
    </>
  );
};

export default Form;
