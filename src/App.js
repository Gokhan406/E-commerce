import { useState } from "react";
import Header from "./components/Header";
import Products from "./components/Products";
import ViewDetail from "./components/ViewDetail";
import Sepet from "./components/Sepet";
import Login from "./components/Login";

function App() {
  const [ürünler,Setürünler] = useState([
    {
      ürün_id:1,
      ürün_adi:"Mor Oversize Baskılı Şardonlu Kapüşonlu Erkek Sweatshirt",
      ürün_aciklama:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo odio unde tenetur voluptates a beatae quam maiores repudiandae ullam facere!",
      ürün_fiyat:307,
      ürün_foto:require("./images/ürün1.jpg"),
    },
    {
      ürün_id:2,
      ürün_adi:"KENAIJING Erkek Kapüşonlu Sweatshirt, Hoodie Kapüşonlu Baskılı Sweatshirt",
      ürün_aciklama:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo odio unde tenetur voluptates a beatae quam maiores repudiandae ullam facere!",
      ürün_fiyat:999,
      ürün_foto:require("./images/ürün2.jpg"),
    },
    {
      ürün_id:3,
      ürün_adi:"Black Sokak Beyaz The Hope Baskılı Oversize Kapüşonlu Erkek Sweatshirt",
      ürün_aciklama:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo odio unde tenetur voluptates a beatae quam maiores repudiandae ullam facere!",
      ürün_fiyat:650,
      ürün_foto:require("./images/ürün3.jpg"),
    },
    {
      ürün_id:4,
      ürün_adi:"Siyah Üç Renkli Şardonlu Erkek Sweatshirt",
      ürün_aciklama:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo odio unde tenetur voluptates a beatae quam maiores repudiandae ullam facere!",
      ürün_fiyat:307,
      ürün_foto:require("./images/ürün4.jpg"),
    },
  ]);
  
  const [secilenUrunler,SetSecilenUrunler] = useState([]);
  const [newPage,SetnewPage] = useState("anasayfa");
  const [ürün_id,SetÜrünid] = useState();

  const setPage = (durum,ürün_id) => {
    if(durum === "sepet"){
      SetnewPage("sepet");
    }
    if(durum === "login"){
      SetnewPage("login");
    }
    if(durum === "detay"){
      SetnewPage("detay");
      SetÜrünid(ürün_id);
    }
    if(durum === "a"){
      if((newPage === "detay" || newPage === "sepet") || newPage === "login"){
        SetnewPage("anasayfa");
      }
    }
  }

  const UrunSec = (urunid) => {
    SetSecilenUrunler([...secilenUrunler,{
      ürün_id:ürünler[urunid - 1].ürün_id,
      ürün_adi:ürünler[urunid - 1].ürün_adi,
      ürün_aciklama:ürünler[urunid - 1].ürün_aciklama,
      ürün_fiyat:ürünler[urunid - 1].ürün_fiyat,
      ürün_foto:ürünler[urunid - 1].ürün_foto,
    }]);
  }

  if(newPage === "detay"){
    return(
      <div>
        <Header setPage={setPage} secilenUrunler={secilenUrunler}/>
        <ViewDetail ürün={ürünler[ürün_id - 1]} UrunSec={UrunSec}/>
      </div>
    ); 
  }
  if(newPage === "anasayfa"){
    return (
      <div className="App">
        <Header setPage={setPage} secilenUrunler={secilenUrunler}/>
        <Products ürünler={ürünler} setPage={setPage}/>
      </div>
    );
  }
  if(newPage === "sepet"){
    return (
      <div className="App">
        <Header setPage={setPage} secilenUrunler={secilenUrunler}/>
        <Sepet sepet={secilenUrunler}/>
      </div>
    );
  }
  if(newPage === "login"){
    return (
      <div className="App">
        <Header setPage={setPage} secilenUrunler={secilenUrunler}/>
        <Login/>
      </div>
    );
  }
}

export default App;