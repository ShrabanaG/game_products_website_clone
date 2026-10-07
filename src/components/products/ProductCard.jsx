import { useState } from "react";
import { Plus } from "lucide-react";

const ProductsCard = ({ product }) => {
  const { name, image, tag, per_day_rent } = product;
  const [isPriceVisible, setIsPriceVisible] = useState(false);

  const getTagStyles = (tag) => {
    switch (tag) {
      case "Trending":
        return " text-orange-600 border-orange-700";
      case "New":
        return "text-blue-600 border-blue-700";
      case "Vote to Launch":
        return "text-green-600 border-green-700";
      default:
        return "hidden";
    }
  };

  return (
    <div className="shadow-[0_4px_24px_rgba(0,0,0,0.015)] flex flex-col justify-between transition-all duration-300 hover:bg-white p-4">
      <div className="relative rounded-3xl p-5  bg-white">
        {tag && (
          <span
            className={`inline-flex items-center font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 left-2 top-2 rounded-lg border px-1.5 py-0 text-[10px] md:left-3 md:top-3 md:border-2 md:px-2.5 md:py-0.5 md:text-xs ${getTagStyles(product.tag)}`}
          >
            {tag}
          </span>
        )}
        <img
          src={image}
          alt={name}
          className="h-full w-full object-contain p-4 transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="px-1 pt-2">
        <h3 className="line-clamp-1.5 min-h-20 text-sm md:text-lg font-semibold leading-5 text-[#090A0B]">
          {name}
        </h3>

        {/* Divider */}
        <div className="my-1.5 border-t border-[#dedede]" />

        <div className="relative min-h-[55px]">
          <p className="text-[13px] leading-4 text-gray-600 font-semibold">
            Select Dates to view
            <br />
            price
          </p>

          <div className="mt-3 flex items-center gap-0.5 text-[15px] font-bold text-[#090A0B]">
            <span>₹</span>

            {/* Relative wrapper containing only the price number and its relative overlay shield */}
            <div className="relative inline-block">
              <span
                className={!isPriceVisible ? "blur-[1.5px] select-none" : ""}
              >
                {per_day_rent}
              </span>

              {/* Elegant frosted glass cover mask */}
              {!isPriceVisible && (
                <div className="absolute inset-0 bg-white/20 backdrop-blur-[6px] rounded" />
              )}
            </div>
          </div>

          <button
            type="button"
            className="absolute bottom-0 right-0 flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#090A0B] bg-white transition-all duration-200 hover:bg-[#090A0B] hover:text-white"
          >
            <Plus size={22} strokeWidth={1.8} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
