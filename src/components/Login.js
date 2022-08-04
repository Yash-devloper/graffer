import React from 'react'

function Login() {

    
  return (
    <>
    <div className='container'>
<div className='row justify-content-center'>
    <div className='col-xs-12 col-sm-10 col-md-8 col-lg-5'>
        <form>
        <h1 className='mt-5'>Login</h1>
            <div className='form-group mt-5'>
                <input type="email" className='form-control' placeholder='Enter Email' />
            </div>
            <div>
                <input type="password" className='form-control mt-2' placeholder='Enter Password' />
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