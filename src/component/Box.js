import React from 'react'

const Box = (props) => {
  return (
    <div className="box">
      <h1>{props.title}</h1>
      <img className='item-img'src={props.item ? props.item.img : 'https://cdn-icons-png.flaticon.com/512/1191/1191137.png'} />
      <h2>win</h2>
    </div>
  )
}

export default Box