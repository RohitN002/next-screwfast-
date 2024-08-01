// pages/products.tsx
import Image from 'next/image';
import Navbar from '@/components/Navbar';
export default function Products() {
  return (
    <div className="bg-gray-50">
      {/* <header className="bg-white py-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-xl font-bold text-gray-800">
            <Image src="/logo.png" alt="ScrewFast Logo" width={120} height={40} />
          </div>
          <nav>
            <ul className="flex space-x-6 text-gray-800">
              <li><a href="/" className="hover:text-orange-500">Home</a></li>
              <li><a href="/products" className="hover:text-orange-500">Products</a></li>
              <li><a href="/services" className="hover:text-orange-500">Services</a></li>
              <li><a href="/blog" className="hover:text-orange-500">Blog</a></li>
              <li><a href="/contact" className="hover:text-orange-500">Contact</a></li>
              <li><a href="/login" className="hover:text-orange-500">Log in</a></li>
            </ul>
          </nav>
        </div>
      </header> */}
<Navbar/>
      <main className="container mx-auto py-12">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800">Products</h1>
          <p className="text-gray-600 mt-4">Explore the durability and precision of ScrewFast tools, designed for both professionals and enthusiasts.</p>
          <button className="mt-6 bg-orange-500 text-white py-2 px-4 rounded-lg shadow-md">Customer Stories</button>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <Image src="/images/machine-screws.jpg" alt="Machine Screws" width={400} height={300} className="rounded-lg" />
            <h2 className="text-xl font-bold text-gray-800 mt-4">Machine Screws</h2>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <Image src="/images/assorted-screw-set.jpg" alt="Assorted Screw Set" width={400} height={300} className="rounded-lg" />
            <h2 className="text-xl font-bold text-gray-800 mt-4">Assorted Screw Set</h2>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <Image src="/images/tap-bolts.jpg" alt="Tap Bolts and Nuts Set" width={400} height={300} className="rounded-lg" />
            <h2 className="text-xl font-bold text-gray-800 mt-4">Tap Bolts and Nuts Set</h2>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <Image src="/images/hex-bolts.jpg" alt="Hex Bolts" width={400} height={300} className="rounded-lg" />
            <h2 className="text-xl font-bold text-gray-800 mt-4">Hex Bolts</h2>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <Image src="/images/nuts.jpg" alt="Nuts" width={400} height={300} className="rounded-lg" />
            <h2 className="text-xl font-bold text-gray-800 mt-4">Nuts</h2>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">Why Choose ScrewFast?</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Robust and reliable tools</h3>
              <p className="text-gray-600">Long-lasting performance for all your projects.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Innovative solutions</h3>
              <p className="text-gray-600">Tailored to modern construction needs.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Dedicated support</h3>
              <p className="text-gray-600">We're here to help your project's success.</p>
            </div>
          </div>
        </section>

        <section className="text-center mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">What Our Customers Say</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-gray-600 mb-4">"Since switching to ScrewFast's hardware tools, the efficiency on our construction sites has skyrocketed. The durability of the hex bolts and precision of the machine screws are simply unmatched."</p>
              <p className="text-gray-800 font-bold">Jason Clark</p>
              <p className="text-gray-600">Site Foreman | TopBuild</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-gray-600 mb-4">"As an interior designer, I'm always looking for high-quality materials and tools that help bring my visions to life. ScrewFast's mixed screws assortment has been a game-changer for my projects."</p>
              <p className="text-gray-800 font-bold">Maria Gonzalez</p>
              <p className="text-gray-600">Interior Designer | Creative Spaces</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-gray-600 mb-4">"I've been a professional carpenter for over 15 years, and I can sincerely say that ScrewFast tap bolts and nuts are some of the best I've used. They grip like no other, and I have full confidence in every joint and fixture."</p>
              <p className="text-gray-800 font-bold">Richard Kim</p>
              <p className="text-gray-600">Master Carpenter | WoodWright</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
          <div className="mb-4 lg:mb-0">
            <p className="text-lg font-bold">ScrewFast</p>
            <p className="text-gray-400">&copy; 2024 ScrewFast. Crafted by solsystemoAI.</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">Facebook</a>
            <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
            <a href="#" className="text-gray-400 hover:text-white">Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
