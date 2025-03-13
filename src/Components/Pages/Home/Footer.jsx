import { Link } from "react-router";

const Footer = () => {
  return (
    <div className="bg-black p-20 w-full">
      <div className="container mx-auto">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 space-y-5">
          <div className="space-y-5 text-center sm:text-left mx-auto">
            <h5 className="text-white text-2xl">Shop</h5>
            <ul className="text-gray-400 flex flex-col">
              <Link>Shop Parts</Link>
              <Link>Wheels & Rims</Link>
              <Link>Engine</Link>
              <Link>Vehicle Body Parts</Link>
              <Link>Accessories</Link>
              <Link>Wholesale</Link>
            </ul>
          </div>
          <div className="space-y-5 text-center sm:text-left mx-auto">
            <h5 className="text-white text-2xl">The Company</h5>
            <ul className="text-gray-400 flex flex-col">
              <Link>About Us</Link>
              <Link>Reviews</Link>
              <Link>Premium Area</Link>
              <Link>FAQ</Link>
            </ul>
          </div>
          <div className="space-y-5 text-center sm:text-left mx-auto">
            <h5 className="text-white text-2xl">Contact Us</h5>
            <ul className="text-gray-400 flex flex-col">
              <h5>info@email.com</h5>
              <h4>400 lorem ipsum francisco</h4>
              <h4>Tel: 123-123-123</h4>
            </ul>
          </div>
          <div className="space-y-5 text-center sm:text-left mx-auto">
            <h5 className="text-white text-2xl">Follow Us</h5>
            <ul className="text-gray-400 flex flex-col">
              <Link>Facebook</Link>
              <Link>Instagram</Link>
              <Link>Youtube</Link>
              <Link>Twitter</Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
