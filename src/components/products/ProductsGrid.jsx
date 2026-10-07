import { useState } from "react";
import ProductCard from "./ProductCard";

import { Banner1, Banner2 } from "../../assets";
import { productsData } from "../../data/productsData";

const ProductGrid = () => {
  const products = productsData.products;

  const [visibleCount, setVisibleCount] = useState(12);

  const visibleProducts = products.slice(0, visibleCount);

  const handleShowMore = () => {
    setVisibleCount((current) => current + 12);
  };

  const ProductSection = ({ products }) => {
    return (
      <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    );
  };

  return (
    <section className="min-w-0 flex-1">
      {/* Product grid */}
      <ProductSection products={visibleProducts.slice(0, 4)} />
      <div className="my-6">
        <img
          src={Banner1}
          alt="Banner1"
          width={1920}
          height={400}
          className="h-full w-full rounded-2xl object-cover"
        />
      </div>
      <ProductSection products={visibleProducts.slice(4, 8)} />

      <div className="my-6">
        <img
          src={Banner2}
          alt="Banner2"
          width={1920}
          height={400}
          className="h-full w-full rounded-2xl object-cover"
        />
      </div>
      <ProductSection products={visibleProducts.slice(8, visibleCount)} />

      {/* Show More */}
      {visibleCount < products.length && (
        <div className="flex flex-col items-center pb-16 pt-12">
          <p className="mb-3 text-[14px] text-[#999]">
            Showing {visibleProducts.length} of {products.length} results
          </p>

          <button
            type="button"
            onClick={handleShowMore}
            className="h-12 w-[270px] rounded-full border-2 border-[#111] bg-white text-[14px] font-medium transition-colors duration-200 hover:bg-[#111] hover:text-white"
          >
            Show More
          </button>
        </div>
      )}
    </section>
  );
};

export default ProductGrid;
