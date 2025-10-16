import Marquee from "react-fast-marquee";
import { GoArrowUp } from "react-icons/go";
import gsap from 'gsap'
const Footer = () => {
    return (
        <div className='overflow-hidden'>
            <div className='flex flex-col md:flex-row mt-22 justify-between p-6'>
                <div></div>
                <div className='md:text-6xl text-2xl  md:sw-1/2 text-right'>
                    <h1>01792784801</h1>
                    <h1>mustazirr@gmail.com</h1>
                    <div className='flex flex-col md:flex-row  mt-22 justify-between md:text-3xl uppercase'>
                        <a
                        onMouseEnter={() => gsap.to("#curser", { scale: 7, duration: 0.5 })}
              onMouseLeave={() => gsap.to("#curser", { scale: 1, duration: 0.5 })}
              target="_blank"
                         className='hover:underline underline-offset-4' href="https://www.facebook.com/mustazirr/">facebook</a>
                        <a
                        onMouseEnter={() => gsap.to("#curser", { scale: 7, duration: 0.5 })}
              onMouseLeave={() => gsap.to("#curser", { scale: 1, duration: 0.5 })}
              target="_blank"
                        className='hover:underline underline-offset-4' href="@mustazirr">Telegram</a>
                        <a
                        onMouseEnter={() => gsap.to("#curser", { scale: 7, duration: 0.5 })}
              onMouseLeave={() => gsap.to("#curser", { scale: 1, duration: 0.5 })}
              target="_blank"
                        className='hover:underline underline-offset-4' href="https://www.linkedin.com/in/mustazirr/">Linkedin</a>
                    </div>
                </div>
            </div>
            <Marquee className='md:text-[500px] text-9xl overflow-hidden uppercase'>
                S.M.Mustazir Billah.
            </Marquee>
            <div className='p-9 flex flex-col md:flex-row justify-between md:px-[20vw]'>

                <a href="#banner-page" className='flex items-center gap-2 uppercase tracking-wider'> <GoArrowUp /><p>Back TO Top</p></a>
                <h1>© 2025 S.M.Mustazir Billah. All rights reserved.</h1>
            </div>
        </div>
    );
};

export default Footer;