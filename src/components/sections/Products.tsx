import { IMAGES } from '../../data/imageConstants';

export function Products() {
  return (
    <section id="products" className="py-16 bg-white">
      <div className="container">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Products
          </h2>
        </div>

        {/* Product Grid - 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {IMAGES.products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow">
              {/* Product Image */}
              <div className="aspect-square bg-gray-100 rounded-lg mb-4 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Product Name */}
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {product.name}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-600 mb-3">
                Premium quality tea with rich aroma and authentic taste from Assam gardens.
              </p>

              {/* Price - Green */}
              <p className="text-2xl font-bold text-primary-500">
                ${product.price}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
