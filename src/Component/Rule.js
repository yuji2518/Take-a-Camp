import './Rule.css'


 export default function Rule (){
   return(
     <div className='content'>
      <h2 className='title'>Rule</h2>
      <ul>
        <li>2つのチームに別れた陣取りゲームです</li>
        <li>個人は1時間に1回自陣と接しているマスに投票することができます</li>
        <li>マスに投票された数が、敵チームよりも多ければ自分の陣地となります</li>
        <li>中央の旗は10pt, 四隅の旗は5pt, それ以外の陣地は1ptです</li>
      </ul>
     </div>
   )
 }
