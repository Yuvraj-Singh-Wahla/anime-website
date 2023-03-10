import React from 'react'
import "./content2.css"
import Content2 from './Content2'
import {useState,useEffect} from 'react';

const Content_2 = () => {

    const [status,setStatus] = useState();
    const [arr,setArr] = useState();

    useEffect(() => {
        fetch('http://localhost:3001/app2')
        .then((response) => response.json())
        .then((data) => {
            setArr(data);
            setStatus(true);
        });
    });

    // const arr = [
    //     {
    //         heading:'Naruto',
    //         desc : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga sunt voluptate est nam unde, veniam optio in, cupiditate esse minima accusamus culpa. Non officia omnis doloribus incidunt dolorem eligendi voluptate?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur nemo assumenda',
    //         src:'https:www.pngmart.com/files/5/Naruto-Shippuden-PNG-Clipart.png'
    //     },
    //     {
    //         heading:'SASke',
    //         desc : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga sunt voluptate est nam unde, veniam optio in, cupiditate esse minima accusamus culpa. Non officia omnis doloribus incidunt dolorem eligendi voluptate?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur nemo assumenda',
    //         src:'https://www.pngmart.com/files/3/Naruto-Pain-PNG-Clipart.png"'
    //     },
    //     {
    //         heading:'KAKShi',
    //         desc : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga sunt voluptate est nam unde, veniam optio in, cupiditate esse minima accusamus culpa. Non officia omnis doloribus incidunt dolorem eligendi voluptate?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur nemo assumenda',
    //         src:'https://w0.peakpx.com/wallpaper/410/461/HD-wallpaper-uchiha-itachi-black-itachi-black-uchiha-black.jpg'
    //     },
    //     {
    //         heading:'ITACHI',
    //         desc : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga sunt voluptate est nam unde, veniam optio in, cupiditate esse minima accusamus culpa. Non officia omnis doloribus incidunt dolorem eligendi voluptate?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur nemo assumenda',
    //         src:'https://wallpapercave.com/wp/wp5513061.jpg'
    //     },
    //     {
    //         heading:'AKTASTSI',
    //         desc : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga sunt voluptate est nam unde, veniam optio in, cupiditate esse minima accusamus culpa. Non officia omnis doloribus incidunt dolorem eligendi voluptate?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur nemo assumenda',
    //         src:'https://wallpaperaccess.in/public/uploads/preview/uchiha-sharingan-logo-minimal-naruto-wallpaper-uchiha-clans-sharingan-s.jpg'
    //     },
    //     {
    //         heading:'JIRIYA',
    //         desc : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga sunt voluptate est nam unde, veniam optio in, cupiditate esse minima accusamus culpa. Non officia omnis doloribus incidunt dolorem eligendi voluptate?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur nemo assumenda',
    //         src:'https://4kwallpapers.com/images/wallpapers/kakashi-hatake-naruto-amoled-black-background-artwork-2048x2048-6484.jpg'
    //     }
    // ]
  return (
    <div className=''>
      <div className='flex flex-wrap  space-x-20 justify-evenly'>
        {
            status?arr.map((data)=>{
                return <Content2 heading={data.heading} desc = {data.desc} src = {data.src} />
            }):null
        }
        </div>
    </div>
      
  )
}

export default Content_2