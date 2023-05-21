import React, { useRef } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from "axios";
import HomeStyles from "./Home.module.css";
import Loader from '../Components/Loader';

let url=`https://randomuser.me/api/?results=5`;

type Name={
    first:string;
    last:string
}

type Picture={
    thumbnail:string
}

export interface FirstLevel{
    name:Name;
    picture:Picture;
}

const Home: React.FC = () => {
  let [data,setData]=useState<FirstLevel[]>([]);
  let [page,setPage]=useState(1);
  let [isLoading,setLoading]=useState(false);
  
  let getData=(page:number)=>{
     
     setLoading(true);
     setTimeout(()=>{
         
         axios.get(`${url}&page=${page}`).then((r)=>{
            console.log(r.data.results,"results r.data");
            setData((prevData)=>[...prevData,...r.data.results]);  
          }).catch((err)=>{
              console.log(err,"error");
          })
          setLoading(false);
     },1000)
         
  }

  let handleScroll=()=>{
      console.log("hi scroll")
      if(window.innerHeight+window.scrollY===document.documentElement.scrollHeight){
        // Reached the bottom of the page ; so fetch data;
        setPage((prevPage)=>prevPage+1);
      }
      console.log(window.innerHeight,document.documentElement.scrollTop,document.documentElement.offsetHeight,window.scrollY,document.documentElement.scrollHeight,"window.innerHeight scrollTop offsetheight,scrollY, scrollHeight")
  }

  useEffect(()=>{
    window.addEventListener('scroll',handleScroll);
    return () => {
        // Cleanup the event listener when the component unmounts
        window.removeEventListener('scroll', handleScroll);
    };

  },[])
  useEffect(()=>{
    getData(page);
  },[page])
  
console.log(data,"data",page,"page")
  return (
    <div>
       
      {
          data.length>0 && data.map((item,ind)=>{
              return (
                  <div key={ind} className={HomeStyles.list} >
                      <div> {item.name.first}{" "}{item.name.last}</div>
                      <img src={item.picture.thumbnail} />
                  </div>
              )
          })    
      }
      {isLoading?<Loader/>:""} 
    </div>

  );
};

export default Home;