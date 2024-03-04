import React from 'react'

export default function SepetÜrün(props) {
  return (
    <div className='sepet_ürün'>
      <img src={props.ürün.ürün_foto}/>
      <div>
        <h3>{props.ürün.ürün_adi}</h3>
        <p>{props.ürün.ürün_fiyat}TL</p>
      </div>
    </div>
  )
}