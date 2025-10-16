import React from 'react';
import Spline from '@splinetool/react-spline';
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { TbBrandGithubFilled } from "react-icons/tb";
import { SiGmail } from "react-icons/si";
import gsap from 'gsap';

import { IoLogoWhatsapp } from "react-icons/io";
const Banner = () => {
    return (
        <div id='banner-page' className='h-auto pb-40 pt-10 relative  flex flex-col md:flex-row  justify-center items-center'>
            <div className='text-2xl md:text-3xl hi  relative md:-top-8  md:left-40'>
                <h1>I am S.M. Mustazir Billah,</h1>
            </div>
            <div className='text-6xl md:text-[200px]   tracking-tight  md:p-5 relative left-10 md:left-38 font-dmSans leading-16 font- md:leading-40'>
                <div className='flex'><h1 onMouseEnter={() => gsap.to('#curser', { scale: 7, duration: 0.5 })}
                    onMouseLeave={() => gsap.to('#curser', { scale: 1, duration: 0.5 })} className='heading  z-10   text-grow over'>Designer</h1>
                    <span className='font-themunday  heading  md:text-[230px] top-2 md:top-6 relative ml-1 md:ml-0 text-grow'>&</span></div>
                <div onMouseEnter={() => gsap.to('#curser', { scale: 7, duration: 0.5 })}
                    onMouseLeave={() => gsap.to('#curser', { scale: 1, duration: 0.5 })}
                    className='flex  relative'>
                    <h1 className='heading z-10  text-grow'>Developer </h1>

                </div>


            </div>
            <div className='text-xl md:text-3xl hi  absolute bottom-10 md:bottom-30 md:right-80'>
                <h1>Full Stack Developer + Graphics Designer</h1>
            </div>
            <div className='absolute left-5 top-24 md:top-1/2 text-2xl'>
                <div className='text-zinc-900   flex flex-col   '>
                    <a href="https://www.facebook.com/mustazirr/" target='_blank' className='bg-white  p-2 duration-300 hover:bg-zinc-900 hover:text-white'><FaFacebookF /></a>
                    <a href="https://www.linkedin.com/in/mustazirr/"  target='_blank'className='bg-white p-2 duration-300  hover:bg-zinc-900 hover:text-white'><FaLinkedinIn /></a>
                    <a href="https://github.com/Mustazir" target='_blank' className='bg-white p-2 duration-300 hover:bg-zinc-900 hover:text-white'><TbBrandGithubFilled /></a>
                    <a href="https://wa.me/8801792784801 " target='_blank' className='bg-white p-2 duration-300 hover:bg-zinc-900 hover:text-white'><IoLogoWhatsapp /></a>
                </div>
            </div>

            {/* <Spline scene="https://prod.spline.design/QMmq1lJH9CXVImz5/scene.splinecode" /> */}
        </div>
    );
};

export default Banner;