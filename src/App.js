import {useState} from "react";
import Box from './component/Box.js'
import './App.css';
import React from 'react';


const choice = {
  rock :{
    name:'rock',
    img:"https://cdn-icons.flaticon.com/png/512/3562/premium/3562093.png?token=exp=1661068371~hmac=de72de4637b687279b0995719ddb5c89"},
  scissors :{
    name:'scissors',
    img:"https://cdn-icons.flaticon.com/png/512/4958/premium/4958040.png?token=exp=1661068343~hmac=3b2f23a39d0c6f567a4553d137947f84"},
  paper : {
    name :'paper',
    img:"https://cdn-icons-png.flaticon.com/512/2165/2165693.png" }
  
}


function App() {
  const [userSelect, setUserSelect] = useState(null);


  const play = (userChoice)=>{

    setUserSelect(choice[userChoice]) ;
    console.log(userSelect);
  }
  return (
    <div>
      <div className="main">
        <Box title="You" item ={userSelect}/>
        <Box title="Computer" item ={userSelect}/>
      </div>

      <div className="main">
        <button onClick={()=>play("scissors")}>가위</button>
        <button onClick={()=>play("rock")}>바위</button>
        <button onClick={()=>play("paper")}>보</button>
      </div>
    </div>
  );
}

export default App;

/**
 * 1. 박스 2개  (tittle ,사진정보 , 결과값)
 * 2.가위,바위,보 버튼
 * 3. 버튼을 클릭하면 클릭한 값이 내 박스에 보임
 * 4. 컴퓨터 박스에는 랜덤하게 값이 선택 된다. 
 * 5. 3,4 를 가지고 누가 이겼는지 판단한다 . 
 * 6. 이기면 초록, 지면 빨강 , 비기면 검정으로 박스의 보더 색이 변한다.
 * 
 */