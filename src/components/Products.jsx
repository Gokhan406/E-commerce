import React from 'react'
import Product from './Product'

export default function Products(props) {
  return (
    props.ürünler.map(ürün => <Product ürün={ürün} key={ürün.ürün_id} setPage={props.setPage}/>)
  )
}