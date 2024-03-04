import React from 'react'

export default function Header(props) {
  return (
    <header>
      <div className='header-title'>
        <h1 onClick={() => {props.setPage("a")}}>Zamazon</h1>
      </div>
      <div className='icon_parent'>
        <div onClick={() => {props.setPage("sepet")}} className='display'>
          <p className='count_text'>{props.secilenUrunler.length > 0 && props.secilenUrunler.length}</p>
          <i className="fa-solid fa-bag-shopping"></i>
        </div>       
        <i className="fa-solid fa-user" onClick={() => {props.setPage("login")}}></i>
      </div>
    </header>
  )
}