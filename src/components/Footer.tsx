import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

function Footer(): JSX.Element {
  return (
    <div className="w-full mt-24 bg-blue-900 text-blue-50 py-2 px-2">
      <div className="max-w-[1400px] mx-auto grid grid-cols-2 sm:grid-cols-6 border-b-2 border-blue-600 py-8 px-4">
        <div>
          <h2 className="font-bold uppercare pt-2">Solutions</h2>
          <ul>
            <li className="py-1">Booking</li>
            <li className="py-1">Cruises</li>
            <li className="py-1">Flights</li>
            <li className="py-1">Ground</li>
            <li className="py-1">Travel</li>
          </ul>
        </div>
        <div>
          <h2 className="font-bold uppercare pt-2">Support</h2>
          <ul>
            <li className="py-1">Documentation</li>
            <li className="py-1">Pricing</li>
            <li className="py-1">Refunds</li>
            <li className="py-1">Tours</li>
          </ul>
        </div>
        <div>
          <h2 className="font-bold uppercare pt-2">Company</h2>
          <ul>
            <li className="py-1">About</li>
            <li className="py-1">Blog</li>
            <li className="py-1">Jobs</li>
            <li className="py-1">Partners</li>
            <li className="py-1">Press</li>
          </ul>
        </div>
        <div>
          <h2 className="font-bold uppercare pt-2">Legal</h2>
          <ul>
            <li className="py-1">Claims</li>
            <li className="py-1">Conditions</li>
            <li className="py-1">Policies</li>
            <li className="py-1">Privacy</li>
            <li className="py-1">Terms</li>
          </ul>
        </div>
        <div className="col-span-2 py-8 md:pt-2">
          <p className="font-bold uppercase">Subscribe to our newsletters</p>
          <p className="py-4">
            The Latest deals, articles and resources sent to your inbox weekly.
          </p>
          <form className="flex flex-col sm:flex-row">
            <input
              className="w-full p-2 mr-4 rounded-md mb-4"
              type="email"
              placeholder="Enter email"
            />
            <button className="p-2 mb-4 rounded-md">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="flex flex-col max-w-[1400px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-blue-50">
        <p className="p-4">
          &copy;{new Date().getFullYear()} Excursions All Rights Reserved
        </p>
        <div className="flex justify-between sm:w-[300px] pt-4 text-2xl">
          <FaGithub />
          <FaLinkedin />
          <FaTwitter />
        </div>
      </div>
    </div>
  );
}

export default Footer;
