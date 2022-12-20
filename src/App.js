import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (<Weather></Weather>)
};
// //カウントを保存するための、カウント、セットカウント（⇡変更するための）を用意する
// const [count,setCount] = useState(0);

// //useEffectは、クリックした回数を⤵⤵⤵
// //document.titleで、タイトルタグの部分に表示させる（書き変わっている）（ドキュメントのタイトル部分）
// useEffect(() => {
//   document.title = `You clicked ${count} times`;
// });

// return (
//   <>
//     <p>あなたは{count}回クリックしました！</p>
//     <button onClick={() => setCount(count + 1)}>Click</button>
//     <button onClick={function () {
//       return setCount(count + 1)
//     }}>Click</button>
//   </>
// );
//functionバージョン↑

//   const handleClick = () => {
//     //クリックされた時の処理
//     alert('Hello World')
//     };

// // button onClick⇒ボタンをクリック出来る
// const button = <button onClick={handleClick}>クリックしてね</button>;


// const [addrtype, _] = useState(["東京", "大阪", "札幌"])
// const [value, setValue] = useState("");

// useEffect(() => {
//   document.alert = `You clicked ${Add} times`;
// });

const Weather = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  function handleChange(a) {
    alert(a);
  }
  async function querWether() {
    const url =
      "https://www.jma.go.jp/bosai/forecast/data/forecast/130000.json";
    const response = await fetch(url);
    const jsondata = await response.json();
    setData(jsondata[0].timeSeries[0].areas[0]);
    setLoading(false);
  }
  useEffect(() => {
    querWether();
  }, []);
  let wetherinfo;
  if (loading) {
    wetherinfo = <p>loading</p>;
  } else {
    wetherinfo = (
      <p>{data.area.name}の明日の天気は{data.weathers[0]}</p>
    )
  }
  return (
    <>
      <h1>Wether</h1>
      <p>今日の天気は</p>
      {wetherinfo}
      <select onChange={e => handleChange(e.target.value)}>
        <option value="tokyo">東京</option>
        <option value="osaka">大阪</option>
        <option value="sapporo">札幌</option>
      </select>
    </>
  )
}




//ハンドルチェンジされたときにqueryWeatherが実行される



export default App;
