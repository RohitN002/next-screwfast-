import Navbar from "@/components/Navbar";
const Services = () => {
    return (
      <div>
          <Navbar/>
          <div className="bg-orange-100 text-gray-800 p-8">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <form className="mb-6">
        <input
          className="w-full p-2 border rounded-md mb-2"
          type="text"
          placeholder="Name"
        />
        <input
          className="w-full p-2 border rounded-md mb-2"
          type="email"
          placeholder="Email"
        />
        <textarea
          className="w-full p-2 border rounded-md mb-4"
          rows={4}
          placeholder="Details"
        ></textarea>
        <button
          className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600"
          type="submit"
        >
          Send Message
        </button>
      </form>
      <div className="flex space-x-4">
        <a href="/knowledgebase" className="text-blue-500 hover:underline">
          Knowledgebase
        </a>
        <a href="/faq" className="text-blue-500 hover:underline">
          FAQ
        </a>
        <a href="/office-location" className="text-blue-500 hover:underline">
          Visit our office
        </a>
      </div>
      <p className="mt-4">
        Contact us by email:{" "}
        <a href="mailto:support@example.com" className="text-blue-500">
          support@example.com
        </a>
      </p>
    </div>
      </div>
    );
  };
  
  export default Services;
  