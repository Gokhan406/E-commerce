import React from 'react'

export default function ViewDetail(props) {
  return (
    <div className='parent2'>
      <div className='product-parent'>
        <div className='img-header'>
          <img src={props.ürün.ürün_foto} alt="" />
          <div className='product-title-parent'>
            <h1 className='product-title'>{props.ürün.ürün_adi}</h1>
            <p className='product-desc'>{props.ürün.ürün_aciklama}</p>
            <p className='product-price'>{props.ürün.ürün_fiyat}TL</p>
            <div className='product-btn-parent'>
              <button className='product-btn' onClick={() => {props.UrunSec(props.ürün.ürün_id)}}>Sepete Ekle</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}