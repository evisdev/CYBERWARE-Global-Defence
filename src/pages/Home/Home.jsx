import Hero from "./components/Hero/Hero";
import HeroImg from "../../assets/home/hero-home-bg.png";
import Services from "./components/Services/Services";
import WhoWeAre from "./components/WhoWeAre/WhoWeAre";
import Industries from "./components/IndustriesWeServe/IndustriesWeServe";
import Leadership from "./components/Leadership/Leadership";
import Partners from "./components/Partners/Partners";
import Customer from "./components/Customer/Customer";

const Home = () => {
    return (
        <>
            <Hero backgroundImage={HeroImg}/>
            <Services/>
            <WhoWeAre/>
            <Industries/>
            <Leadership />
            <Partners/>
            <Customer/>
        </>
    );
};

export default Home;
