import React from "react";
import {useState} from "react";
import {auth} from "./Fire";

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  const onSubmitHandler = () => {
    console.log("inside onSubmitHandler");
    // firebase api call

  };

  return (
    <>
      
      <div className="container">
      <h1 className="mt-5">Create User</h1>
      <div className="row contain-justify-center">
      <div className="col-xs-12 col-sm-10 col-md-8 col-lg-5">
      <div className="form-group mt-5">
        <input className="form-control" type="email" placeholder="Enter Email" />
      </div>
      <div className="form-group mt-2">
        <input className="form-control" type="password" placeholder="Enter Password" />
      </div>
      <div className="form-group mt-2">
        <input className="form-control" type="password" placeholder="Enter confirm Password" />
      </div>
      <button className="btn btn-success mt-2" onClick={onSubmitHandler}>Create user</button>
      </div>
      </div>
      </div>
    </>
  );
};

export default Form;
