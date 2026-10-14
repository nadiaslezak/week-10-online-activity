import Header from "./elements/header";
import Footer from "./elements/footer";
import Bushfire from "../assets/bushfire.jpg";
import Environment from "../assets/environment.jpg";
import Defense from "../assets/defense.jpeg";
import City from "../assets/city.jpg";

function Homepage() {
  const runTime = () => {
    const getDate: Date = new Date();
    const change: string = getDate.toLocaleTimeString();
    const post: HTMLElement | null = document.getElementById("placeholder");
    if (post) {
      post.innerHTML = change;
    }
  };
  setInterval(runTime, 0);

  return (
    <div className="flex min-h-screen w-screen flex-col">
      <Header />

      <div className="m-8 grid flex-1 grid-cols-1 gap-8 md:grid-cols-2">
        <div className="p-4 flex flex-col justify-between">
          <div className="flex flex-col gap-8">
            <div>
              <h2 className="font-medium text-xl pb-4">Our mission</h2>
              <p className="text-sm/6">
                We are an Australian startup specialising in GEOINT (Geospatial
                Intelligence) using Earth Observation. We have our own conslation
                of statellites. We provide actionable intelligence to government
                agencies and companies to help with natural disaster response,
                security and risk forcasting, monitoring the environment, and infrastructure planning. We are on a mission to
                deliver trusted geospatial intelligence that strengthens decision-making, 
                protects what matters, and supports a safer, more resilient Australia and region.
              </p>
            </div>
            <div>
              <h2 className="font-medium text-xl pb-4">Our services</h2>
              <ul className="list-disc list-inside text-sm/7">
                <li>Satellite imagery aquisition</li>
                <li>Geospatial analysis</li>
                <li>Monitoring and alerting</li>
                <li>Custom intelligence products</li>
              </ul>
            </div>
            <p className="text-sm/7">We are currently hiring for multiple roles. If you are interested and have experience 
              with Earth observation and GEOINT please reach out to our team with your resume <br></br>
              <a className="no-underline hover:underline" href="mailto:recruitment@geoint.com.au">recruitment@geoint.com.au</a></p>
          </div>
          <div>
            <div id="placeholder" />
            <p>Melbourne (UTC+11)</p>
          </div>
        </div>
        <div className="flex flex-col p-4">
          <h2 className="font-medium text-xl pb-4">Our services</h2>
          <div className="flex grid grid-cols-2 gap-4 size-full items-stretch">
            <div
              className="service-grid-item flex bg-cover bg-center bg-no-repeat saturate-0"
              style={{ backgroundImage: `url(${Bushfire})` }}
            >
              <h3 className="self-end text-white">Natural disaster response</h3>
            </div>
            <div
              className="service-grid-item flex bg-cover bg-right bg-no-repeat saturate-0"
              style={{ backgroundImage: `url(${Defense})` }}
            >
              <h3 className="self-end text-white">Defense and security</h3>
            </div>
            <div
              className="service-grid-item flex bg-cover bg-no-repeat saturate-0"
              style={{ backgroundImage: `url(${Environment})` }}
            >
              <h3 className="self-end text-white">Environmental monitoring</h3>
            </div>
            <div
              className="service-grid-item flex bg-cover bg-no-repeat saturate-0"
              style={{ backgroundImage: `url(${City})` }}
            >
              <h3 className="self-end text-white">Infrastructure planning</h3>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
export default Homepage;
