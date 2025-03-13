import { useState, useEffect } from "react";
import Products from "../../../../Data/Products.json";
import ProductGrid from "./ProductGrid";
// Import react icons
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

const ProductSidebar = () => {
  const [filteredItems, setFilteredItems] = useState(
    Object.values(Products).flat()
  );
  const [selectedCategory, setSelectedCategory] = useState("All Products"); // Track selected category
  const [nav, setNav] = useState(false);

  const filterItem = (categItem, displayName) => {
    if (categItem === "All") {
      setFilteredItems(Object.values(Products).flat());
    } else {
      const updateItems = Object.values(Products)
        .flat()
        .filter((curElem) => curElem.category === categItem);
      setFilteredItems(updateItems);
    }
    setSelectedCategory(displayName); // Update text dynamically
    setNav(false); // Auto close menu after clicking
  };

  const handleNav = () => {
    setNav(!nav);
    document.body.classList.toggle("overflow-hidden", nav); // Prevent background scrolling
  };

  useEffect(() => {
    if (nav) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [nav]);

  return (
    <div className="flex flex-col lg:flex-row lg:p-20 container mx-auto">
      {/* Mobile Menu Button */}
      <div className="lg:hidden flex ml-auto">
        {!nav ? (
          <GiHamburgerMenu
            size={40}
            onClick={handleNav}
            className="text-white cursor-pointer"
          />
        ) : null}
      </div>

      {/* Mobile Menu (Right Side) */}
      <div
        className={`fixed top-0 right-0 w-[250px] h-screen bg-black z-50 p-5 transition-transform duration-300 ${
          nav ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <IoMdClose
          size={40}
          onClick={handleNav}
          className="text-white mb-5 cursor-pointer"
        />
        <ul className="flex flex-col text-white space-y-2">
          <li onClick={() => filterItem("All", "All Products")}>
            All Products
          </li>
          <li onClick={() => filterItem("Accessories", "Accessories")}>
            Accessories
          </li>
          <li onClick={() => filterItem("Best Seller", "Best Sellers")}>
            Best Seller
          </li>
          <li onClick={() => filterItem("Engine", "Engine Parts")}>Engine</li>
          <li onClick={() => filterItem("PartsBody", "Vehicle Body Parts")}>
            Vehicle Body Parts
          </li>
          <li onClick={() => filterItem("Wheels", "Wheels & Rims")}>
            Wheels & Rims
          </li>
          <li onClick={() => filterItem("WholeSale", "Wholesale")}>
            WholeSale
          </li>
        </ul>
      </div>

      {/* Sidebar for Large Screens */}
      <div  data-aos="fade-down">
        <div className="hidden lg:flex flex-col space-y-3 pt-20 w-[200px]">
          <h3 className="text-white font-semibold text-xl">Browse by</h3>
          <span className="border border-b-1 border-gray-600 max-w-[150px]"></span>
          <ul className="flex flex-col text-white space-y-2 cursor-pointer">
            <li onClick={() => filterItem("All", "All Products")}>
              All Products
            </li>
            <li onClick={() => filterItem("Accessories", "Accessories")}>
              Accessories
            </li>
            <li onClick={() => filterItem("Best Seller", "Best Sellers")}>
              Best Seller
            </li>
            <li onClick={() => filterItem("Engine", "Engine Parts")}>Engine</li>
            <li onClick={() => filterItem("PartsBody", "Vehicle Body Parts")}>
              Vehicle Body Parts
            </li>
            <li onClick={() => filterItem("Wheels", "Wheels & Rims")}>
              Wheels & Rims
            </li>
            <li onClick={() => filterItem("WholeSale", "Wholesale")}>
              WholeSale
            </li>
          </ul>
        </div>
      </div>
      {/* Product Grid */}

      <ProductGrid products={filteredItems} categoryName={selectedCategory} />
    </div>
  );
};

export default ProductSidebar;
