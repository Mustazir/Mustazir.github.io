import { useGSAP } from '@gsap/react';
import React from 'react';
import gsap from 'gsap';
const Curser = () => {
    useGSAP(()=>{
        const handelMouseMove= (e)=>{
           const {clientX,clientY}=e;
           gsap.to('#curser',{
            x:clientX-20,
            y:clientY-2,
            duration:1,
            delay:0,
            ease:"power4.out"
           })   
        }
        
        const banner=document.querySelector('#banner-page')
        window.addEventListener('mousemove',handelMouseMove)
    })
    return (
        <div>
            <div id='curser' className='w-7 mix-blend-difference pointer-events-none fixed top-0 left-0 z-20 rounded-full h-7 bg-white'></div>
        </div>
    );
};

export default Curser;