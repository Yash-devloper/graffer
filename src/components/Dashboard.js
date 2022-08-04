import React from 'react'
import {auth} from './Fire';
import {useNavigate} from 'react-router-dom';


function Dashboard() {
  const navigate = useNavigate();

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
    <h1>Welcome User!</h1>
    <button type="submit" className="btn btn-danger " onClick={logout}>logout</button>

    <hr></hr>
    </>
  )
}

export default Dashboard