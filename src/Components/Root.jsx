import { useGSAP } from '@gsap/react';
import React from 'react';
import { Outlet } from 'react-router-dom';
import gsap from 'gsap';
import Nav from './Nav';
import { ReactLenis, useLenis } from 'lenis/react'
import Lenis from 'lenis';

const Root = () => {

    const lenis = useLenis((lenis) => {
        // called every scroll

        // console.log(lenis)
    })
    //   console.log(lenis)
    useGSAP(() => {
        const tl = gsap.timeline()
        tl.from("#word1 h1", {
            y: -50,
            opacity: 0,
            duration: 0.5,
            ease: "power1.out",
            delay: 1
        }, "<");
        tl.from("#word2 h1", {
            y: 50,
            opacity: 0,
            ease: "power1.out",
            duration: 0.5,
        }, "<");

        tl.to('.diverder', {
            opacity: 100,
            scaleY: '100%',
            duration: 1.5,

            delay: 0.5,

            onComplete: () => {
                gsap.to('.diverder', {
                    opacity: 0,
                    duration: 1.2,


                })
            }
        })
        tl.to("#word1 h1", {
            y: 50,
            opacity: 0,
            duration: 0.5,
            ease: "power1.out",
            delay: 0.5
        },);
        tl.to("#word2 h1", {
            y: -50,
            opacity: 0,
            ease: "power1.out",
            duration: 0.5,
        }, "<");
        tl.to('.block', {
            y: '-100%',
            duration: 1,
            delay: 0.2,
            ease: "power3.out",
            stagger: 0.2

        })
        tl.from('.heading', {
            opacity: 0,
            delay: 0.2,
            duration: 0.4,
            stagger: 0.2
        }, "<")

        tl.to('.loader', {
            display: 'none',
        })
    })
    return (
        <div className='relative'>
            <div className='loader  z-40 fixed top-0 left-0 w-full '>
                <div className='overlay text-white flex flex-row '>
                    <div className="block bg-zinc-950 h-screen w-full "></div>
                    <div className="block bg-zinc-950 h-screen w-full "></div>
                </div>
                <div className="logo-text text-white font-themunday font-thin absolute left-1/2 top-1/2 translate-x-[-33%] translate-y-[-50%] flex gap-5 text-5xl overflow-hidden">
                    <div className="word" id="word1">
                        <h1>Hi ,</h1>
                    </div>
                    <div className="word" id="word2">
                        <h1>There</h1>
                    </div>
                </div>
                <div className="diverder bg-white w-[1px] opacity-0 top-0 left-1/2  absolute h-full origin-bottom"></div>

            // </div>
            <div className='bg-zinc-900 select- overflow-hidden font-urbanist text-white'>
                <Nav></Nav>
                <Outlet></Outlet>
            </div>
            <ReactLenis
                root
                options={{
                    duration: 1.2,        // scroll duration in seconds (default: 1.2)
                    easing: (t) => 1 - Math.pow(1 - t, 3), // custom easing curve
                   
                    gestureDirection: 'both', // allow both mouse wheel + touchpad gestures
                    smoothWheel: true,     // smooth scroll for mouse wheel
                    smoothTouch: true,    // smooth scroll for touch devices
                    touchMultiplier: 1.5,  // multiplier for touch scroll speed
                    wheelMultiplier: 1.5,    // multiplier for wheel scroll speed
                    infinite: false,       // loop scrolling
                }}
            />
        </div>
    );
};

export default Root;