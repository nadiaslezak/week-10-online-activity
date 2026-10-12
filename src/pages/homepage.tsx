import { Link } from "react-router";
import Header from "./elements/header";
import Footer from "./elements/footer";
import Bushfire from "../assets/bushfire.jpg";
import Environment from "../assets/environment.jpg";
import Defense from "../assets/defense.jpeg";
import City from "../assets/city.jpg";


// CREDITS
// Image bushfire https://unsplash.com/photos/wildfire-burning-across-hillside-at-dusk-kbTp7dBzHyY
// Image city (infrastrcture) https://unsplash.com/photos/an-aerial-view-of-a-city-at-night-p_n0kx9WG5U
// Image vegetation (environment) https://unsplash.com/photos/satellite-photo-Qu8lplStSSE
// Image defense https://stock.adobe.com/au/images/aerial-satellite-view-showing-cargo-ships-navigating-across-the-blue-ocean-m-high-resolution-imagery-highlighting-maritime-transport-and-global-trade-routes/1783549972


function Homepage() {


    const runTime = () => {
        const getDate: Date = new Date();
        const change: string = getDate.toLocaleTimeString();
        const post: HTMLElement | null = document.getElementById("placeholder");
        if (post) {
            post.innerHTML = change;
        }
    }
    setInterval(runTime, 0);


    return (
        <div className="flex min-h-screen w-screen flex-col">
        <Header />

        <div className="m-8 grid flex-1 grid-cols-1 gap-8 md:grid-cols-2">
            <div className="p-4 flex flex-col justify-between">
                <div className="">
                    <h2 className="font-medium text-xl pb-4">Our mission</h2>
                    <p>
                        We are an Australian startup specialising in GEOINT (Geospatial Intelligence) using Earth Observation. 
                        We have our own conslation of statellites. 
                        We provide actionable intelligence to government agencies and companies to help with natural disaster response, security and risk forcasting, monitoring the environemtn and vegetation, and infrastructure planning.
                    </p>
                </div>
                <div>
                    <div id="placeholder" />
                    <p>Melbourne (UTC+11)</p>
                </div>


            </div>
            <div className="flex flex-col p-4">
                <h2 className="font-medium text-xl pb-4">Our services</h2>
                <div className="flex grid grid-cols-2 gap-4 size-full items-stretch">
                    <div className="service-grid-item flex bg-cover bg-center bg-no-repeat saturate-0" style={{backgroundImage: `url(${Bushfire})`}}>
                        <h3 className="self-end text-white">Natural disaster response</h3>
                    </div>
                    <div className="service-grid-item flex bg-cover bg-right bg-no-repeat saturate-0" style={{backgroundImage: `url(${Defense})`}}>
                        <h3 className="self-end text-white">Defense and security</h3>
                    </div>
                    <div className="service-grid-item flex bg-cover bg-no-repeat saturate-0" style={{backgroundImage: `url(${Environment})`}}>
                        <h3 className="self-end text-white">Environmental monitoring</h3>
                    </div>
                    <div className="service-grid-item flex bg-cover bg-no-repeat saturate-0" style={{backgroundImage: `url(${City})`}}>
                        <h3 className="self-end text-white">Infrastructure planning</h3>
                    </div>
                </div>
            </div>
        </div>

        <Footer />
        </div>
    )
} export default Homepage



