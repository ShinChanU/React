import React, { useState, useEffect } from "react";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState([]);

  const memberMapping = () => {
    fetch('http://localhost:3001/members')
      .then(response => response.json())
      .then(data => {
        const dataArray = Object.values(data);
        setUser(dataArray);
        console.log(user);
      });
  }

  useEffect(() => {
    memberMapping();
  }, []);

  const handleClick = () => {
    try {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          password
        })
      };
      fetch('http://localhost:3001/members', requestOptions)
        .then(response => response.json())
        .then(data => {
          console.log(data);
        })
        .then(memberMapping);
    } catch (e) {
      alert("Failed to login");
      setEmail("");
      setPassword("");
    }
  };

  return (
    <>
      <h1>Sign Up</h1>
      <input
        value={email}
        onChange={({ target: { value } }) => setEmail(value)}
        type="email"
        placeholder="email"
        required
      />
      <input
        value={password}
        onChange={({ target: { value } }) => setPassword(value)}
        type="password"
        placeholder="password"
        required
      />
      <button onClick={handleClick}>SUBMIT</button>
      {user.map((v, i) => {
        return <li key={i}>email: {v.email} <br /> password: {v.password} <br /><br /></li>
      })}
    </>
  );
}

export default SignUp;