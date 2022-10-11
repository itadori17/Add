import { getDatabase, ref as ref_database, child, get,push } from "firebase/database";

import React, {useEffect, useState} from 'react';
import { uid } from "uid";

import { db, storage } from '../config';
import './Add.css'


function Add() {

  var today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth()+1; //January is 0 so need to add 1 to make it 1!
  let yyyy = today.getFullYear();
  let minutes = today.getMinutes();
  let hour = today.getHours();
  let sec = today.getSeconds();
  if(dd<10){
    dd='0'+dd
  }
  if(mm<10){
    mm='0'+mm
  }
  today = yyyy+'-'+mm+'-'+dd+'-'+ hour + ":" + minutes +':' + sec;
    const [brand, setBrand] = useState("");
    const [category, setCategory] = useState("");
    const [productName, setProductName] = useState("");
    const [image, setImage] = useState("");
    const [Price, setPrice] = useState("");
    const [About, setAboutProduct] = useState("");
    const [Size, setSize] = useState("");
    const [Colors, setColors] = useState("");
    const [Filters, setFilter] = useState("");
    const [productTimeStamp, setProductTimeStamp] = useState(today);
    const [allInfo, setAllInfo] = useState([]);




    const [xS, setSizeXs] = useState("");
    const [s, setSizeS] = useState("");
    const [m, setSizeM] = useState("");
    const [l, setSizeL] = useState("");
    const [xL, setSizeXl] = useState("");
    const [xXl, setSize2Xl] = useState("");
    const [xXxl, setSize3Xl] = useState("");


      const [ojbHandler, setObjHandler] = useState([]);
      const arrObj = [];
      const uidd = uid();
    useEffect(() => {
      
          // read
      const dbRef = ref_database(getDatabase());
      get(child(dbRef, `${uidd}`)).then((snapshot) => {
     if (snapshot.exists()) {
      console.log(snapshot.val());
      let keys = Object.keys(snapshot.val())
      const Key = snapshot.key;
      const Data = snapshot.val();

      let arr = []
      for (var x = 0; x < keys.length; x++){
        arr.push(Data[keys[x]])
      }
      console.log(arr)
      setObjHandler(arr);
     
  } else {
    console.log("No data available");
  }
}).catch((error) => {
  console.error(error);
});
        
        
      },[]);

    const add = async  () => {

      let availableSize ={
        XS:xS,
        S:s,
        M:m,
        L:l,
        X:xL,
        XXL:xXl,
        XXXL:xXxl
      }
        let productInfo = {
          brandname: brand,
          categoryName: category,
          productname: productName,
          productImage: image,
          productPrice: Price,
          aboutProducr: About,
          productSize: availableSize,
          productColors: Colors,
          productFilter: Filters,
          timeStamp: productTimeStamp
          
        };

        
        push(ref_database(db, `${uidd}/`), {
            productInfo
          });
    }


  return (
   <>
   </>
    

  )
}

export default Add