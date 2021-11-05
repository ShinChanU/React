import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
const App = () => {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const serviceKey = '55dW2qCxCESN8%2FA0usAQ4h6SHKCRxpitlw0azmERYa%2F8euX4SmCHk4JuPN61x40qUAo7kO1vVdsglIZmbivZkw%3D%3D'
  const fetchUsers = async () => {
    try {
      setError(null);
      setUsers(null);
      setLoading(true);
      const response = await axios.get(
        `http://api.visitkorea.or.kr/openapi/service/rest/KorService/areaCode?ServiceKey=${serviceKey}&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=TestApp&_type=json`
      );
      console.log(response.data);
      setUsers(response.data);
    } catch (e) {
      setError(e);
    };
    setLoading(false);
  };
  useEffect(() => {
    fetchUsers();
  }, []);
  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!users) return null;
  return (
    <>
      <ul>
        {users.map(user =>
          <li key={user.id}>
            {user.username} ({user.name})
          </li>
        )}
      </ul>
      <button onClick={fetchUsers}>다시 불러오기</button>
    </>
  );
}
export default App;