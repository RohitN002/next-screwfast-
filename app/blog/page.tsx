import { Footer } from "@/components/Footer";
import Navbar from "@/components/Navbar";
const Services = () => {
    const featuredProducts = [
        {
          id: 1,
          name: 'Powerful Hammer Drill',
          description: 'Ideal for heavy-duty construction tasks.',
          imageUrl: '/images/hammer-drill.jpg', // Replace with actual image URL
        },
        // Add more products as needed
      ];

      const aboutContent = {
        title: 'About Us',
        description:
          'At ScrewFast Construction Services, we believe in innovation and excellence. Our mission is to provide affordable, durable tools for efficient construction projects. Our team of experts is dedicated to enhancing safety and workmanship in the industry.',
        imageUrl: '/images/about-us.jpg', // Replace with actual image URL
      };

      const insights = [
        {
          id: 1,
          title: 'The Future of Construction Technology',
          content:
            'Discover how AI, robotics, and automation are reshaping the construction industry.',
        },
        // Add more insights as needed
      ];
      
    return (
      <div>
          <Navbar/>
          <section className="bg-blue-900 text-white py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">
            Your Gateway to Construction Excellence
          </h1>
          <p className="text-lg mb-8">
            Enhancing Safety and Workmanship with ScrewFast Construction Services
          </p>
          <p className="text-lg">
            Maximizing Efficiency with ScrewFast's Cutting-Edge Tools
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white p-4 rounded-lg shadow-md"
              >
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-gray-600">{product.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-4">{aboutContent.title}</h2>
          <p className="text-lg text-gray-600 mb-8">{aboutContent.description}</p>
          <img
            src={aboutContent.imageUrl}
            alt="About Us"
            className="w-full max-w-md mx-auto rounded-lg shadow-md"
          />
        </div>
      </section> 

      <section className="py-12">
        <div className="container mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Insights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {insights.map((insight) => (
              <div
                key={insight.id}
                className="bg-white p-4 rounded-lg shadow-md"
              >
                <h3 className="text-lg font-semibold">{insight.title}</h3>
                <p className="text-gray-600">{insight.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

<Footer/>
      </div>
    );
  };
  
  export default Services;
  