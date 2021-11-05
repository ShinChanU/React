import React, { useState, useEffect } from "react";
// import { Redirect } from "react-router-dom";
// { authenticated, login, location }
function LoginForm() {
  // const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // useEffect(() => {
  //   fetch('http://localhost:3001/members') // 비동기 통신을 위해
  //     .then(res => {
  //       return res.json(); // response는 http 응답이기때문에 json으로 변환 필요, promise를 반환해줌
  //     })
  //     .then(data => {
  //       console.log(data[0].email);
  //     })
  // }, []);

  // useEffect(() => {
  //   // POST request using fetch inside useEffect React hook
  //   const requestOptions = {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({ title: 'React Hooks POST Request Example' })
  //   };
  //   fetch('http://localhost:3001/members', requestOptions)
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log(data);
  //       // setEmail(data.id);
  //     });

  // empty dependency array means this effect will only run once (like componentDidMount in classes)
  // }, []);

  const handleClick = () => {
    try {
      // login({ email, password });
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
          // setEmail(data.id);
        });
    } catch (e) {
      alert("Failed to login");
      setEmail("");
      setPassword("");
    }
  };

  // const { from } = location.state || { from: { pathname: "/" } };
  // if (authenticated) return <Redirect to={from} />;

  return (
    <>
      <h1>Login</h1>
      <input
        value={email}
        onChange={({ target: { value } }) => setEmail(value)}
        type="text"
        placeholder="email"
      />
      <input
        value={password}
        onChange={({ target: { value } }) => setPassword(value)}
        type="password"
        placeholder="password"
      />
      <button onClick={handleClick}>Login</button>
    </>
  );
}

export default LoginForm;