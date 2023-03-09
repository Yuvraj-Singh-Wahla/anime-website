import React from 'react';
import Card from './Card';
import { useEffect,useState } from 'react';
import './card.css'
function Cardata(){
    const [status,setStatus] = useState();
    const [message,setMessage] = useState();
    useEffect(()=>{
        fetch("http://localhost:3001/mkc")
        .then((res)=>res.json())
        .then((data)=>{
            setMessage(data);
            setStatus(true);
        });
    });
    // const arr = [
    //     {
    //         title: 'One Punch Man',
    //         desc: 'this is naruto anime card with many transitions',
    //         src: 'https://www.pngmart.com/files/13/One-Punch-Man-Saitama-PNG-Photos.png',
    //     },
    //     {
    //         title: 'NARUTO',
    //         desc: 'this is naruto anime card with many transitions',
    //         src: 'https://www.pngmart.com/files/6/Attack-On-Titan-PNG-File-1.png',
    //     },
    //     {
    //         title: 'DEMON SLAYER',
    //         desc: 'this is naruto anime card with many transitions',
    //         src: 'https://www.pngmart.com/files/13/One-Piece-Anime-PNG-Transparent-Image.png',
    //     },
    //     {
    //         title: 'BLACK CLOVER',
    //         desc: 'this is naruto anime card with many transitions',
    //         src: 'https://www.pngmart.com/files/4/Anime-Girl-PNG-Pic.png',
    //     },
    //     {
    //         title: 'JUJUTSU KAISEN',
    //         desc: 'this is naruto anime card with many transitions',
    //         src: 'https://www.pngmart.com/files/13/Black-Clover-PNG-Transparent-Image.png',
    //     },
    //     {
    //         title: 'ONE PIECE',
    //         desc: 'this is naruto anime card with many transitions',
    //         src: 'https://assets.stickpng.com/images/5ede49b5b760540004f2c5e5.png',
    //     },
    // ];
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