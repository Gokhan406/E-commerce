import React, { useEffect, useState } from 'react'
import SepetÜrün from './SepetÜrün'

export default function Sepet(props) {
  const [toplam_fiyat,Settoplam_fiyat] = useState(0);
  var toplam = 0;
  const topla = () => {
    props.sepet.map(ürün => {
      toplam += ürün.ürün_fiyat;
      Settoplam_fiyat(toplam);
    })
  }

  useEffect(() => {
    topla()
  },[])

  if(props.sepet.length > 0){
    return (
      <div className='sepet_parent'>
        <div className='sepet_main'>
          <h1 className='sepet_title'>Sepetteki Ürünler {props.sepet.length}</h1>
          {
            props.sepet.map((ürün,index) => 
              <SepetÜrün ürün={ürün} key={index}/>
            )
          }
        </div>
        <div className='sepet_fiyat'>
          <h1 className='fiyat_title'>Toplam Tutar</h1>
          <div className='fiyat_items'>
            <div className='fiyat_parent'></div>
            {
              props.sepet.map((ürün,index) => 
                <div>
                  <div>
                    <h3>{ürün.ürün_adi}</h3>
                    <p>{ürün.ürün_fiyat}TL</p>
                    <br />
                  </div>
                </div>                
              )
            }
            <div className='toplam_cizgi'></div>
            <div>
              <p className='fiyat_text'>{toplam_fiyat} TL</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
  else{
    return(
      <div>
        <h1>Sepetinizde Ürün Bulunmuyor</h1>
      </div>
    )
  }
}