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
        setPage((prevPage)=>prevPage+1);
    },1000)
    
         
  }

  let handleScroll=()=>{
      if(window.innerHeight+document.documentElement.scrollTop+1 >= document.documentElement.scrollHeight){
        console.log("at the bottom of the page");
        if(!isLoading){
            getData(page);
        }
        
      }
     
  }

  useEffect(()=>{
    window.addEventListener('scroll',handleScroll);
    return () => {
        window.removeEventListener('scroll', handleScroll);
    };

  },[])
  useEffect(()=>{
    getData(page);
  },[])
  
console.log(data,"data",page,"page")
  return (
    <div>
       
      {
          data.length>0 && data.map((item,ind)=>{
              return (
                  <div key={ind} className={HomeStyles.list} >
                      <p>{ind+1}</p>
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
