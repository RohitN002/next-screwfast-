import { Footer } from "@/components/Footer";
import Navbar from "@/components/Navbar";
const Services = () => {
    return (
      <div>
          <Navbar/>
          <div className="bg-gray-200 min-h-screen flex items-center justify-center">
      <div className="container mx-auto p-8">
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Contact us</h2>
          <p className="text-gray-600 mb-8">
            Have questions or want to discuss a project? Reach out, and let's craft the perfect solution with our tools and services.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <form className="flex flex-col space-y-4">
              <div className="flex space-x-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="p-4 border border-gray-300 rounded-md w-full"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="p-4 border border-gray-300 rounded-md w-full"
                />
              </div>
              <input
                type="email"
                placeholder="Email"
                className="p-4 border border-gray-300 rounded-md w-full"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="p-4 border border-gray-300 rounded-md w-full"
              />
              <textarea
                placeholder="Details"
                className="p-4 border border-gray-300 rounded-md w-full h-32"
              />
              <button className="bg-yellow-500 text-white py-4 rounded-md text-lg font-semibold hover:bg-yellow-600 transition duration-200">
                Send Message
              </button>
              <p className="text-gray-500 text-sm">We'll get back to you in 1-2 business days.</p>
            </form>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Knowledgebase</h3>
                <p className="text-gray-600">Browse through all of our knowledgebase articles.</p>
                <a href="#" className="text-yellow-500">Visit guides & tutorials →</a>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">FAQ</h3>
                <p className="text-gray-600">Explore our FAQ for quick, clear answers to common queries.</p>
                <a href="#" className="text-yellow-500">Visit FAQ →</a>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Visit our office</h3>
                <p className="text-gray-600">
                  UK ScrewFast<br />
                  72 Union Terrace, E10 4PE London
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Contact us by email</h3>
                <p className="text-gray-600">Prefer the written word? Drop us an email at</p>
                <a href="mailto:support@screwfast.uk" className="text-yellow-500">support@screwfast.uk</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
      </div>
    );
  };
  
  export default Services;
  