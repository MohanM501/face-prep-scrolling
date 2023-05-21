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
  let [data,setData]=useState<FirstLevel[]>([]); // Array of multiple objects;
  let [page,setPage]=useState(1);
  let [isLoading,setLoading]=useState(false);
  
  let getData=(page:number)=>{
     
    setLoading(true);
    // It waits for 1sec(1000ms) before it calls API;
    // Based on `Page Number` API Calls are called to get different users each as we scoll down.
    setTimeout(()=>{
        axios.get(`${url}&page=${page}`).then((r)=>{
            setData((prevData)=>[...prevData,...r.data.results]);  // Destructering to combine old data with new data got from api call to achieve infinite scrolling
        }).catch((err)=>{
            console.log(err,"error");
        })
        setLoading(false);
        setPage((prevPage)=>prevPage+1);// Updates page number instantly
    },1000)
         
  }
  

  let handleScroll=()=>{
      if(window.innerHeight+document.documentElement.scrollTop+1 >= document.documentElement.scrollHeight){
        // Reached the Bottom of the Page;
        if(!isLoading){
            getData(page);
        }  
      }
     
  }

  // To handle Scroll behaviour;
  useEffect(()=>{
    window.addEventListener('scroll',handleScroll);
    return () => {
        window.removeEventListener('scroll', handleScroll);
    };

  },[])

  // To call initial data during first time rendering;
  useEffect(()=>{
    getData(page);
  },[])
  

  return (
    <div>
       
      {
          data.length>0 && data.map((item,ind)=>{
              return (
                  // As it is fixed Array ; index is used as key ; if it was dynamic array key is not preffered;
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
