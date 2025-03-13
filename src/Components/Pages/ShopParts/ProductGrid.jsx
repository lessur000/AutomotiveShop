import PropTypes from "prop-types"; // Import PropTypes
import { useContext } from "react";
import { CartContext } from "../../Cart/Context/CartContext";

const ProductGrid = ({ products, categoryName }) => {
  const { addToCart } = useContext(CartContext);
  return (
    <div className="lg:pt-20">
      <h1 className="text-white font-semibold text-5xl">{categoryName}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 p-5 ">
        {products && products.length > 0 ? (
          products.map((product) => (
            <div
              key={`${product.category}-${product.id}`}
              className="border border-gray-400 overflow-hidden bg-[#1a1a1a]"
              data-aos="fade-left"
            >
              <div className="relative group overflow-hidden">
                <img
                  src={`/Images/${product.image}`}
                  alt={product.name}
                  className="w-full h-[280px] object-cover group-hover:scale-125"
                />

                <button
                  onClick={() => addToCart(product, product.id)}
                  className="absolute top-1/2 left-12  bg-black bg-opacity-50 p-4 py-2 px-10 rounded-3xl text-white opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                >
                  Add to cart
                </button>
              </div>
              <div className="p-4">
                <h3 className="text-white">{product.name}</h3>
                <p className="text-red-500">${product.price}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-white">No products available</p>
        )}
      </div>
    </div>
  );
};
// ✅ Add Prop Validation
ProductGrid.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      category: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string,
      image: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
  categoryName: PropTypes.string.isRequired,
};

export default ProductGrid;
