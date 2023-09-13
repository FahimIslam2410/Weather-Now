import React, { useState } from 'react';

const DemoForm = ({ navigate }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!email || !password) {
      setError("Please enter a valid email or password");
      return;
    }

    let response = await fetch( '/demo', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: email, password: password })
    })

    // Bad Request
    if (response.status !== 201) {
      navigate('/form')
    } else {
    //Good Request
      let data = await response.json()
      window.localStorage.setItem("token", data.token)
      navigate('/render');
    }
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }


    return (
     
      <form onSubmit={handleSubmit}>
        <div data-cy="error">{error}</div>
        <input placeholder='Email' id="email" type='text' value={ email } onChange={handleEmailChange} />
        <input placeholder='Password' id="password" type='password' value={ password } onChange={handlePasswordChange} />
        <input role='submit-button' id='submit' type="submit" value="Submit" />
      </form>
    );
}

export default DemoForm;
