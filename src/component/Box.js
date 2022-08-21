import React from 'react'

const Box = (props) => {
  let result ;
  if(props.title=="Computer"){
    if(props.state=="WIN"){
      result ="LOSE";
    }else if(props.state=="LOSE"){
      result ="WIN";
    }else{result=props.state;}
  }else{
    result = props.state;
  }

  return (
    <div className={`box ${result}`}>
      <h1>{props.title}</h1>
      <img className='item-img'src={props.item ? props.item.img : 'https://cdn-icons-png.flaticon.com/512/1191/1191137.png'} />
      <h2>{result}</h2>
    </div>
  )
}

export default Box
