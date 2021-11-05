// import { Link } from "react-router-dom";
// import { useState, useEffect } from 'react';

const users = [
  { email: "kim@test.com", password: "123", name: "Kim" },
  { email: "lee@test.com", password: "456", name: "Lee" },
  { email: "park@test.com", password: "789", name: "Park" },
];

export function signIn({ email, password }) {
  const user = users.find(
    (user) => user.email === email && user.password === password
  );
  if (user === undefined) throw new Error();
  return user;
}

  // useEffect(() => {
  //   fetch('http://localhost:3001/members') // 비동기 통신을 위해
  //     .then(res => {
  //       return res.json(); // response는 http 응답이기때문에 json으로 변환 필요, promise를 반환해줌
  //     })
  //     .then(data => {
  //       console.log(data[0].email);
  //     })
  // }, []);
