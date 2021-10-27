import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const serviceKey = "1uKq8t5guAoT%2Fo8NMNoUznxVDzZowFnDvQVoP8roDEubRTXLRtwgm%2B6S5j5ta8HgGB6%2FdTkds6IVkMWc88Fgew%3D%3D"; // 서비스키 입력 

  const url = `http://api.visitkorea.or.kr/openapi/service/rest/KorService/areaCode?serviceKey=${serviceKey}&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&areaCode=1`;

  // const [locationData, setLocationDate] = useState({

  // });

  useEffect(() => {
    const fetchEvents = async () => {
      const res = await axios.get(url);
      console.log(res);
      console.log(res.data.response.body.items.item[0]);
      const items = res.data.response.body.items.item;
      items.map((v, i) => {
        console.log(v.name);
      })
    };

    fetchEvents();
  });

  /* 아래는 쿼리 변수들로 차후 입력받을 예정 */

  // const [data, setData] = useState(null);
  // const [numOfRows, setRows] = useState(10);
  // const [pageNo, setPageNo] = useState(1);
  // const [startCreateDt, setStartCreateDt] = useState(() => {
  //   var date = new Date();
  //   // date.setDate(date.getDate() - 1);
  //   const result = date.toISOString().slice(0, 10).replace(/[-]/g, '');
  //   return result;
  // });


  // const [endCreateDt, setEndCreateDt] = useState(() => {
  //   var date = new Date();
  //   const result = date.toISOString().slice(0, 10).replace(/[-]/g, '');
  //   return result;
  // });

  /* 차후 url 업데이트 추가 */



  // const onClick = async () => {
  //   try {
  //     const response = await axios(url, {
  //       method: 'GET',
  //       mode: 'no-cors',
  //       headers: {
  //         'Access-Control-Allow-Origin': '*',
  //         'Content-Type': 'application/xml; charset=utf-8',
  //       },
  //       withCredentials: true,
  //       credentials: 'same-origin',
  //     });

  //     setData(response.data);

  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  return (
    <div>
      <div>
        <button>불러오기</button>
      </div>
      {/* {data && <textarea rows={30} cols={100} value={JSON.stringify(data, null, 2)} readOnly={true} />} */}
    </div>
  );
};

export default App;
