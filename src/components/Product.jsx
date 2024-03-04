import React from 'react'

export default function Product(props) {
  return (
    <div className='parent'>
        <div className={`ürün ${props.ürün.ürün_id}`}>
            <p className='ürün_baslık'>{props.ürün.ürün_adi}</p>
            <div className='image-parent'>
              <img src={props.ürün.ürün_foto}/>
            </div>
            <p className='text'>{props.ürün.ürün_fiyat}TL</p>
            <button className='btn' onClick={() => {props.setPage("detay",props.ürün.ürün_id)}}>Ürünü Incele</button>
        </div>
    </div>
  )
}