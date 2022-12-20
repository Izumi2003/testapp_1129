import './App.css';
import { useEffect, useState, useCallback } from 'react';

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
  const [data, setData] = useState([]);//JSONで返ってきたデータを保存するためのもの
  const [loading, setLoading] = useState(true);//ローディング中か否かのフラグを設定する
  const [city, setcityCode] = useState(130000);//都市コード用、初期値は東京エリア

  // function handleChange(a) {
  //   alert(a);
  // }

  //useCallback(第一引数、第二引数)
  //第二引数の値[city]の値が変化した時のみ、コールバック関数が再実行される
  //これはfunction↓
  const querWether = useCallback(async () => {
    const url = `https://www.jma.go.jp/bosai/forecast/data/forecast/${city}.json`;
    const response = await fetch(url);
    const jsondata = await response.json();
    //必要な部分のデータを上から順番にそって指定する

    //必要なデータだけをsetData()で抜き出してステートに保存する
    setData(jsondata[0].timeSeries[0].areas[0]);
    setLoading(false);
    console.log(data)
  }, [city]);//ここまでが第一引数
  //変化した時のみ実行(ここではボタンが切り替えられたとき)


  const handleChange = (event) => {
    setcityCode(event.target.value);//handleChangeにeventを指定し、valueを表示するため
    setLoading(true);
  }


  useEffect(() => {
    querWether();
  }, [city, querWether]);//cityとquerWetherを使う
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
      <p>{data.area.name}今日の天気は{data.weathers[1]}</p>
      {wetherinfo}
      <select onChange={handleChange}>
        <option value="130000">東京</option>
        <option value="270000">大阪</option>
        <option value="016000">札幌</option>
      </select>
    </>
  )
}



/* <>
      <h1>Wether</h1>
      <p>今日の天気は</p>
      {wetherinfo}
      <select onChange={e => handleChange(e.target.value)}>
        <option value="130000">東京</option>
        <option value="270000">大阪</option>
        <option value="016000">札幌</option>
      </select>
    </> */
//ハンドルチェンジされたときにqueryWeatherが実行される



export default App;
