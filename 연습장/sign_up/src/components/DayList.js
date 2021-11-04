import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';

export default function DayList() {
  const [days, setDays] = useState([]);
  const [count, setCount] = useState(0);

  const onClick = () => {
    setCount(count + 1);
  };

  const onClick2 = () => {
    setDays([
      ...days,
      {
        id: Math.random(),
        day: 1,
      },
    ])
  };

  useEffect(() => {
    console.log("count change");
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
      <button onClick={onClick}>{count}</button>
      <button onClick={onClick2}>Day change</button>
    </>
  );
}