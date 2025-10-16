
import { useState, useEffect } from "react";
const LowerBanner = () => {
    const [time, setTime] = useState("");

    useEffect(() => {
        const update = () => {
            const now = new Date();
            const hours = now.getHours() % 12 || 12; // 12-hour format
            const minutes = now.getMinutes().toString().padStart(2, "0");
            const ampm = now.getHours() >= 12 ? "pm" : "am";
            setTime(`${hours}.${minutes} ${ampm}`);
        };

        update(); // set immediately
        const interval = setInterval(update, 1000); // update every second
        return () => clearInterval(interval);
    }, []);
    return (
        <div className='mx-2 mt-20 md:mt-0 md:mx-44 pb-12 '>
            <div>
                <div className="uppercase flex pb-5 md:text-xl justify-between">
                    <a href="#myworks">PROJECTS</a>
                    <a href="#aboutme">About Me</a>
                    <h1>{time}</h1>
                </div>
                <div className='h-[1px] w-ull bg-white'></div>
            </div>
            
        </div>
    );
};

export default LowerBanner;