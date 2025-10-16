
import Banner from './Banner';

import Aboutus from './Aboutus';
import LowerBanner from './extra/LowerBanner';
import Curser from './extra/Curser';
import Projects from './Projects/Projects';
import Footer from './Footer';
import Skills from './Skills';
import Certificates from './Certificates';




const Home = () => {
    return (
        <div >

            <Banner></Banner>
            <Curser></Curser>
            <LowerBanner></LowerBanner>
            <Projects></Projects>
            <Aboutus></Aboutus>
            <Skills></Skills>
            <Certificates></Certificates>


            <Footer></Footer>
        </div>
    );
};

export default Home;