import React, { useState } from 'react'
import {createUserWithEmailAndPassword} from 'firebase/auth'


function form() {

//  const [email, setEmail] = useState("");
// const [password, setPassword] = useState("");
// const [cpass, setCpass] = useState("");
// const [error, setError] = useState("");

// const validatePassword = () => {
//     let isValid = true
//     if (password !== '' && cpass !== ''){
//       if (password !== cpass) {
//         isValid = false
//         setError('Passwords does not match')
//       }
//     }
//     return isValid
//   }



// const handleSubmit = e => {
//         e.preventDefault()
//         setError('')
//         if(validatePassword()) {
//           // Create a new user with email and password using firebase
//             createUserWithEmailAndPassword( email, password)
//             .then((res) => {
//                 console.log(res.user)
//               })
//             .catch(err => setError(err.message))
//         }
//         setEmail('')
//         setPassword('')
//         setCpass('')
//     }

  return (
    <>

<div className="container">
        <div className="row justify-content-center">
          <div className="col-xs-12 col-sm-10 col-md-8 col-lg-5">
            <form>
              <h2>Create User</h2>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter Email"
                  required
                  // value={email}
                  // onChange={(e)=>setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control mt-2"
                  placeholder="Enter Password"
                  required
                  // value={password}
                  // onChange={(e)=>setPassword(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control mt-2"
                  placeholder="Confirm Password"
                  required
                  // value={cpass}
                  // onChange={(e)=>setCpass(e.target.value)}
                />
              </div>
              <button className="btn btn-success form-control mt-2">
                Create User
              </button>
            </form>
          </div>
        </div>
      </div> 

    
    </>
  )
}

export default form