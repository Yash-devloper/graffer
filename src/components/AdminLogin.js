import React from "react";
import { useState } from "react";
import firebase from "./Fire";
import { useNavigate } from "react-router-dom";
import { async } from "@firebase/util";
// import M from "materialize-css/dist/js/materialize.min.js";

function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  const login = async() => {
    console.log("Inside");
    try {
      const user = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
      if (user && email === "admin@gmail.com") {
        alert("Admin Login");
        // M.toast({
        //   html: `Login Successfully`,
        //   classes: "green darken-1 rounded",
        // });
        // props.authenticate();
        localStorage.setItem("email", email);
        navigate("/form");
        if (email === "admin@gmail.com" && password === "admin@123") {
          // if (email === "info@yep.education" && password === "admin@123") {
          localStorage.setItem("isAdmin", "true");
        } else {
          localStorage.setItem("isAdmin", "false");
        }
      } else {
        // M.toast({ html: `Invalid Credentials`, classes: "red rounded" });
      }
    } catch (error) {
      // M.toast({ html: `Invalid Credentials`, classes: "red rounded" });
    }
  };

  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xs-12 col-sm-10 col-md-8 col-lg-5">
            <h1 className="mt-5">Admin Login</h1>
            <form onSubmit={login}>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control mt-5"
                  placeholder="Email"
                  value={email}
                  onChange={(e)=> setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control mt-2"
                  placeholder="password"
                  value={password}
                  onChange={(e)=> setPassword(e.target.value)}
                />
              </div>
              <button
                className="btn btn-primary form-control mt-2"
                type="submit"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminLogin;
