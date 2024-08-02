export const Footer = ()=>{
    return (
      <footer className="bg-gray-200 p-8">
      <div className="container mx-auto grid grid-cols-4 gap-8">
        {/* Logo Section */}
        <div className="col-span-1">
          <h2 className="text-xl font-bold">ScrewFast</h2>
        </div>
        
        {/* Ecosystem Section */}
        <div className="col-span-1">
          <h3 className="font-semibold">Ecosystem</h3>
          <ul>
            <li><a href="#" className="hover:underline">Documentation</a></li>
            <li><a href="#" className="hover:underline">Tools & Equipment</a></li>
            <li><a href="#" className="hover:underline">Construction Services</a></li>
          </ul>
        </div>

        {/* Company Section */}
        <div className="col-span-1">
          <h3 className="font-semibold">Company</h3>
          <ul>
            <li><a href="#" className="hover:underline">About us</a></li>
            <li><a href="#" className="hover:underline">Blog</a></li>
            <li><a href="#" className="hover:underline">Careers <span className="bg-orange-600 text-white px-2 py-1 rounded-full ml-2">We’re hiring!</span></a></li>
            <li><a href="#" className="hover:underline">Customers</a></li>
          </ul>
        </div>

        {/* Stay Up to Date Section */}
        <div className="col-span-1">
          <h3 className="font-semibold">Stay up to date</h3>
          <form className="flex items-center mt-2">
            <input type="email" placeholder="Enter your email" className="p-2 rounded-l-md border border-gray-300 w-full" />
            <button type="submit" className="bg-orange-600 text-white px-4 py-2 rounded-r-md">Subscribe</button>
          </form>
          <p className="text-sm text-gray-600 mt-2">Stay updated with the latest tools and exclusive deals.</p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="container mx-auto mt-8 flex justify-between items-center text-sm text-gray-600">
        <p>&copy; 2024 ScrewFast. Crafted by sobstvennoAI.</p>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-black">f</a>
          <a href="#" className="hover:text-black">X</a>
          <a href="#" className="hover:text-black">G</a>
          <a href="#" className="hover:text-black">S</a>
        </div>
      </div>
    </footer>
    )
}