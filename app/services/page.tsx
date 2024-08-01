import Navbar from "@/components/Navbar";
import Image from 'next/image';
const Services = () => {
    return (
      <div>
          <Navbar/>
          <main className="container mx-auto px-4 py-12 space-y-16">
        <section className="text-center">
          <h1 className="text-4xl font-bold">Uniting Expertise with Your Vision</h1>
          <p className="mt-4 text-gray-600">
            At ScrewFast, we take pride in providing comprehensive solutions and exceptional service in the hardware and construction industry.
          </p>
          <button className="mt-6 px-6 py-3 bg-orange-500 text-white rounded hover:bg-orange-600">
            Schedule a Consultation
          </button>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <Image src={"https://screwfast.uk/_astro/features-image.BEGIe8fA_ZXyMRJ.webp"} alt="Guidance" width={600} height={400} className="rounded-lg" />
          </div>
          <div>
            <h2 className="text-2xl font-bold">Delivering Expert Guidance</h2>
            <p className="mt-4 text-gray-600">
              With our professional consultation services, we guide you through every stage, ensuring you make informed decisions.
            </p>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold">Transforming Designs into Reality</h2>
            <p className="mt-4 text-gray-600">
              Our skilled craftsmen bring precision and excellence to every construction project.
            </p>
            <button className="mt-6 px-6 py-3 bg-orange-500 text-white rounded hover:bg-orange-600">
              Learn More
            </button>
          </div>
          <div>
            <Image src={"https://screwfast.uk/_astro/before-after.BntBToq6_1pQiXH.avif"}  alt="Design" width={600} height={400} className="rounded-lg" />
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <Image src={"https://screwfast.uk/_astro/before-after.BntBToq6_1pQiXH.avif"}  alt="Oversight" width={600} height={400} className="rounded-lg" />
          </div>
          <div>
            <h2 className="text-2xl font-bold">Navigating Projects with Professional Oversight</h2>
            <p className="mt-4 text-gray-600">
              Effective project management is at the heart of any successful build.
            </p>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold">Ensuring Long-lasting Performance</h2>
            <p className="mt-4 text-gray-600">
              Our commitment to your project doesn’t end at completion.
            </p>
          </div>
          <div>
            <Image src={"https://screwfast.uk/_astro/before-after.BntBToq6_1pQiXH.avif"}  alt="Performance" width={600} height={400} className="rounded-lg" />
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <Image src={"https://screwfast.uk/_astro/before-after.BntBToq6_1pQiXH.avif"} alt="Strategies" width={600} height={400} className="rounded-lg" />
          </div>
          <div>
            <h2 className="text-2xl font-bold">Crafting Bespoke Strategies for Unique Challenges</h2>
            <p className="mt-4 text-gray-600">
              We engineer tailored strategies aimed at optimizing your operations, enhancing efficiency, and driving your business forward.
            </p>
            <button className="mt-6 px-6 py-3 bg-orange-500 text-white rounded hover:bg-orange-600">
              Read more
            </button>
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-2xl font-bold">By the Numbers</h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <p className="text-4xl font-bold text-orange-500">96%</p>
              <p className="text-gray-600">of our clients rate their experience with ScrewFast as exceptional</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-orange-500">99.8%</p>
              <p className="text-gray-600">project completion rate</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-orange-500">5,000+</p>
              <p className="text-gray-600">successful installations</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-orange-500">85%</p>
              <p className="text-gray-600">client growth year-over-year</p>
            </div>
          </div>
        </section>
      </main>

      </div>
    );
  };
  
  export default Services;
  