import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';

export default function DayList() {
  const [days, setDays] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/days') // 비동기 통신을 위해
      .then(res => {
        return res.json(); // response는 http 응답이기때문에 json으로 변환 필요, promise를 반환해줌
      })
      .then(data => {
        setDays(data);
      })
  }, []);

  return (
    <>
      <ul className="list_day">
        {days.map(day => (
          <li key={day.id}>
            <Link to={`/day/${day.day}`}>Day {day.day}</Link>
          </li >
        ))
        }
      </ul>
    </>
  );
}