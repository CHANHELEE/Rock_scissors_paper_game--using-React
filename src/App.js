import {useState} from "react";
import Box from './component/Box.js'
import './App.css';
import React from 'react';


const choice = {
  rock :{
    name:'rock',
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz0exxamAIjYSIg9EDaoUJp4-9jIoHmkW9GA&usqp=CAU"},
  scissors :{
    name:'scissors',
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnOmV8m0xrwKpkta4EblGMmPx37e2q9twnlw&usqp=CAU"},
  paper : {
    name :'paper',
    img:"https://cdn-icons-png.flaticon.com/512/2165/2165693.png" }
  
}


function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);

  const [resultState,setResultState] = useState("");




  const play = (userChoices)=>{
    let userChoice = choice[userChoices];
    let computerChoice = choice[randomChoice()];
    setUserSelect(userChoice) ;
    setComputerSelect(computerChoice) ;
    setResultState(returnState(userChoice, computerChoice));

  }

  const randomChoice = ()=> {
    let itemArray = Object.keys(choice);
    let randomIndex =Math.floor( Math.random()*itemArray.length);
    return itemArray[randomIndex];

  }

  const returnState = (user,computer)=>{
    if(user.name == computer.name){
      return "DRAW"
    }else if(user.name == "rock"){
        return computer.name == "scissors" ? "WIN" : "LOSE";      
    }else if(user.name == "paper"){
      return computer.name == "rock" ? "WIN" : "LOSE";
    }else if(user.name == "scissors"){
      return computer.name == "paper"? "WIN" : "LOSE";
    }


    
  }
  return (
    <div>
      <div className="main">
        <Box title="You" item ={userSelect} state = {resultState}/>
        <Box title="Computer" item ={computerSelect} state={resultState}/>
      </div>

      <div className="text textMedia">어떤 것을 낼지 선택하세요.</div>
      <div className={"button buttonMedia"}>
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