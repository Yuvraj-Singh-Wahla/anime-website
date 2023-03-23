import React from 'react';
import Card from './Card';
import { useEffect,useState } from 'react';
import './card.css'
function Cardata(){
    const [status,setStatus] = useState();
    const [message,setMessage] = useState();
    useEffect(()=>{
        fetch("http://localhost:3001/home")
        .then((res)=>res.json())
        .then((data)=>{
            setMessage(data);
            setStatus(true);
        });
    });
    
    return(
        <>
             <div className="flex justify-evenly flex-wrap my-16 mx-4 ">
            {
                status?message.map((data)=>{
                    return (<Card title={data.title} desc = {data.desc} src = {data.src} />)
                }):null
            }
            </div>
            
        </>
    );
}

export default Cardata;