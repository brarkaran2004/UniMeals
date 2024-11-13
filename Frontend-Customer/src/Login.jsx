import React from 'react'

function Login() {
  return (
    <>
    <div className='border-2 border-gray-500'>
     <form action="/submit-login" method="POST">
      <label for="username">Username:</label>
      <input type="text" id="username" name="username" required></input>
      <br></br>
      <label for="password">Password:</label>
      <input type="password" id="password" name="password" required></input>

      <button type="submit">Log In</button>
    </form>    
    </div>

    </>
  )
}

export default Login
