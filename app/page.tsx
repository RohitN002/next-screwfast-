"use client"
import Image from 'next/image';
import { Footer } from "@/components/Footer";
import Navbar from "@/components/Navbar";
import dynamic from 'next/dynamic';
import { useEffect } from "react"; 

// const SmoothScroll = dynamic(() => import('smooth-scroll'), { ssr: false });
export default function Home() { 
  // useEffect(() => {
  //   const scroll = new SmoothScroll('a[href*="#"]', {
  //     speed: 800,
  //     speedAsDuration: true
  //   });
  // }, []);
  return (
    <main className="">
      <Navbar />

    <section className="bg-gray-50 py-20">
      <div className="flex">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-extrabold text-gray-900">
              Equip Your Projects with ScrewFast
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Top-quality hardware tools and expert construction services for every project need.
            </p>
            <div className="mt-8">
              <button className="bg-orange-500 text-white px-6 py-3 rounded-md shadow-sm hover:bg-orange-600">
                Start Exploring
              </button>
              <button className="ml-4 border border-gray-300 text-gray-900 px-6 py-3 rounded-md shadow-sm hover:bg-gray-100">
                Contact Sales Team
              </button>
            </div>
          </div>
        </div>
        <div>
        </div>
      </div>
      
      </section>

      {/* Features Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900">
                Meeting Industry Demands
              </h3>
              <p className="mt-4 text-gray-500">
                At ScrewFast, we tackle the unique challenges encountered in the hardware and construction sectors. From cutting-edge tools to expert services, we deliver the reliability you need.
              </p>
            </div>
            <div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="h-6 w-6 text-orange-500">✔</span>
                  <p className="ml-3 text-gray-500">Dedicated Teams</p>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 text-orange-500">✔</span>
                  <p className="ml-3 text-gray-500">Comprehensive Documentation</p>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 text-orange-500">✔</span>
                  <p className="ml-3 text-gray-500">Simplicity and Affordability</p>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 text-orange-500">✔</span>
                  <p className="ml-3 text-gray-500">User-Centric Design</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
{/* jcb conent */}
{/* <div className="flex m-5 p-5">
  <div style={{borderRadius:"20px"}} className="my-5">
<img src={"https://cdn.wallpapersafari.com/59/51/BiL6Qe.jpg"} alt="" className="my-3" />
  </div>
  <div className="m-3">
    <h4>  Customize ScrewFast's offerings to perfectly suit your hardware and construction needs.</h4>
    <div className="flex">
  <div className="m-3">


<div>
<h6>Cutting-Edge Tools</h6>
<p>Empower your projects with ScrewFast's cutting-edge tools. Experience enhanced efficiency in construction management with our sophisticated automated solutions.</p>
</div>

<div>
<h6>Intuitive Dashboards</h6>
<p>Navigate with ease using ScrewFast's intuitive dashboards. Set up and oversee your projects seamlessly, with user-friendly interfaces designed for quick and effective workflow management.</p>
</div>

<div>
<h6>Robust Features</h6>
<p>Minimize complexity, maximize productivity. ScrewFast's robust features are engineered to streamline your construction process, delivering results that stand out for their excellence.</p>
    </div>
</div>

<div className="m-3">


<div>
<h6>Cutting-Edge Tools</h6>
<p>Empower your projects with ScrewFast's cutting-edge tools. Experience enhanced efficiency in construction management with our sophisticated automated solutions.</p>
</div>

<div>
<h6>Intuitive Dashboards</h6>
<p>Navigate with ease using ScrewFast's intuitive dashboards. Set up and oversee your projects seamlessly, with user-friendly interfaces designed for quick and effective workflow management.</p>
</div>

<div>
<h6>Robust Features</h6>
<p>Minimize complexity, maximize productivity. ScrewFast's robust features are engineered to streamline your construction process, delivering results that stand out for their excellence.</p>
    </div>
</div>
 </div>
  </div>
</div> */}

<section className="flex flex-col md:flex-row items-center justify-center p-8 bg-gray-100">
      {/* Image Section */}
      <div className="md:w-1/2 w-full">
        <Image
          src={"https://cdn.wallpapersafari.com/59/51/BiL6Qe.jpg"} // Replace with your image path
          alt="ScrewFast Machine"
          width={600} // Adjust width as needed
          height={400} // Adjust height as needed
          className="rounded-lg"
        />
      </div>

      {/* Content Section */}
      <div className="md:w-1/2 w-full md:ml-8 mt-8 md:mt-0">
        <h2 className="text-3xl font-bold mb-4">
          Customize <span className="text-yellow-500">ScrewFast's</span> offerings to perfectly suit your hardware and construction needs.
        </h2>
<div className='flex'>
<div className="space-y-4 m-3">
          {/* Feature 1 */}
          <div className="bg-white shadow-md p-4 rounded-lg">
            <h3 className="text-xl font-bold flex items-center">
              <span className="text-orange-500 mr-2">⚙️</span> Cutting-Edge Tools
            </h3>
            <p className="text-gray-700">
              Empower your projects with ScrewFast’s cutting-edge tools. Experience enhanced efficiency in construction management with our sophisticated automated solutions.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white shadow-md p-4 rounded-lg">
            <h3 className="text-xl font-bold flex items-center">
              <span className="text-blue-500 mr-2">📊</span> Intuitive Dashboards
            </h3>
            <p className="text-gray-700">
              Navigate with ease using ScrewFast’s intuitive dashboards. Set up and oversee your projects seamlessly, with user-friendly interfaces designed for quick and effective workflow management.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white shadow-md p-4 rounded-lg">
            <h3 className="text-xl font-bold flex items-center">
              <span className="text-green-500 mr-2">🔧</span> Robust Features
            </h3>
            <p className="text-gray-700">
              Minimize complexity, maximize productivity. ScrewFast’s robust features are engineered to streamline your construction process, delivering results that stand out for their excellence.
            </p>
          </div>
        </div>

        <div className="space-y-4 m-3">
          {/* Feature 1 */}
          <div className="bg-white shadow-md p-4 rounded-lg">
            <h3 className="text-xl font-bold flex items-center">
              <span className="text-orange-500 mr-2">⚙️</span> Cutting-Edge Tools
            </h3>
            <p className="text-gray-700">
              Empower your projects with ScrewFast’s cutting-edge tools. Experience enhanced efficiency in construction management with our sophisticated automated solutions.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white shadow-md p-4 rounded-lg">
            <h3 className="text-xl font-bold flex items-center">
              <span className="text-blue-500 mr-2">📊</span> Intuitive Dashboards
            </h3>
            <p className="text-gray-700">
              Navigate with ease using ScrewFast’s intuitive dashboards. Set up and oversee your projects seamlessly, with user-friendly interfaces designed for quick and effective workflow management.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white shadow-md p-4 rounded-lg">
            <h3 className="text-xl font-bold flex items-center">
              <span className="text-green-500 mr-2">🔧</span> Robust Features
            </h3>
            <p className="text-gray-700">
              Minimize complexity, maximize productivity. ScrewFast’s robust features are engineered to streamline your construction process, delivering results that stand out for their excellence.
            </p>
          </div>
        </div>
</div>
        
      </div>
    </section>
      {/* Pricing Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Exact efficiency and ScrewFast value-driven plans.
          </p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white shadow-md rounded-lg p-8">
              <h3 className="text-xl font-bold text-gray-900">Starter Kit</h3>
              <p className="mt-2 text-gray-500">Best option for DIY projects.</p>
              <p className="mt-6 text-2xl font-extrabold text-gray-900">$49.00 USD/monthly</p>
              <p className="mt-2 text-gray-500">Includes basic tools & tutorials</p>
              <button className="mt-8 w-full bg-orange-500 text-white px-6 py-3 rounded-md shadow-sm hover:bg-orange-600">
                Get the Starter Kit
              </button>
            </div>
            <div className="bg-orange-100 shadow-md rounded-lg p-8">
              <h3 className="text-xl font-bold text-gray-900">Professional Toolbox</h3>
              <p className="mt-2 text-gray-500">Best for large-scale use.</p>
              <p className="mt-6 text-2xl font-extrabold text-gray-900">$89.00 USD/monthly</p>
              <p className="mt-2 text-gray-500">Premium tool selection & expert support</p>
              <button className="mt-8 w-full bg-orange-500 text-white px-6 py-3 rounded-md shadow-sm hover:bg-orange-600">
                Get the Professional Toolbox
              </button>
            </div> 
            <div className="bg-white shadow-md rounded-lg p-8">
              <h3 className="text-xl font-bold text-gray-900">Starter Kit</h3>
              <p className="mt-2 text-gray-500">Best option for DIY projects.</p>
              <p className="mt-6 text-2xl font-extrabold text-gray-900">$49.00 USD/monthly</p>
              <p className="mt-2 text-gray-500">Includes basic tools & tutorials</p>
              <button className="mt-8 w-full bg-orange-500 text-white px-6 py-3 rounded-md shadow-sm hover:bg-orange-600">
                Get the Starter Kit
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
   <Footer/>
    </main>
  );
}
