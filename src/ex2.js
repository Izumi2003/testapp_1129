import './App.css';
import { useEffect,useState } from 'react';

function Ex2() {
  //カウントを保存するための、カウント、セットカウント（⇡変更するための）を用意する
  const [count,setCount] = useState(0);

  //useEffectは、クリックした回数を⤵⤵⤵
  //document.titleで、タイトルタグの部分に表示させる（書き変わっている）（ドキュメントのタイトル部分）
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <>
    <p>あなたは{ count }回クリックしました！</p>
    <button onClick={() => setCount(count + 1)}>Click</button>
    <button onClick={function(){
      return setCount(count + 1)
    }}>Click</button>
    </>
  );
}
    //functionバージョン↑

<select onChange={handleChange}>
  <option value="tokyo">東京</option>
  <option value="osaka">大阪</option>
  <option value="sapporo">札幌</option>
</select>

export default Ex2;