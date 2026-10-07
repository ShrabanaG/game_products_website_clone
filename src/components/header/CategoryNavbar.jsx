import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";

const categories = {
  Photography: [
    "Cameras",
    "Lenses",
    "Tripods",
    "Camera Accessories",
    "Lighting",
    "Drones",
  ],

  Gaming: [
    "GTA VI",
    "PS5 Console",
    "Xbox Console",
    "VR",
    "Racing Wheel",
    "Big Screen Gaming",
  ],
  Outdoor: ["Trekking Gear", "Ridding Gear", "Camping Gear", "Trekking Shoes"],
  Entertainment: ["Projector", "Speakers", "MIC", "VR"],
};

const CategoryNavbar = () => {
  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-[#f7f8fa] h-15">
      <div className="mx-auto hidden px-8 items-center justify-center h-15 md:flex">
        {Object.entries(categories).map(([category, items]) => (
          <div key={category} className="group relative h-full">
            {/* Category */}
            <button
              className={`relative flex h-full items-center justify-center px-12  text-sm  font-semibold ${category === "Gaming" ? "text-[#101010]" : "text-gray-600"} mr-2.5`}
            >
              {category}

              {/* Active underline */}
              {category === "Gaming" && (
                <span className="absolute left-1/2 right-1/2 -bottom-px mx-auto mt-2 h-0.5 w-full -translate-x-1/2 rounded-full md:w-10/12 bg-[#8A2BE2]" />
              )}
            </button>

            {/* Submenu */}
            <div
              className={`
                absolute
                left-1/2
                top-full
                z-100
                hidden
                -translate-x-1/2
                group-hover:block
              `}
            >
              <div
                className="
                  mt-0
                  w-max
                  whitespace-nowrap
                  rounded-4xl
                  bg-white
                  p-5
                  shadow-[0_8px_30px_rgba(0,0,0,0.18)]
                "
              >
                <div className="grid grid-cols-2 gap-x-2">
                  {/* Left column */}
                  <div className="flex flex-col gap-3">
                    {items?.slice(0, 4).map((item) => (
                      <button
                        key={item}
                        className="text-left p-1 text-sm font-semibold text-[#090A0b] transition-colors hover:bg-[#F2F2F2] hover:rounded-sm"
                      >
                        {item}
                      </button>
                    ))}
                  </div>

                  {/* Right column */}
                  <div className="flex flex-col gap-8">
                    {items?.slice(4, Math.ceil(items.length)).map((item) => (
                      <button
                        key={item}
                        className="text-left p-1 text-sm font-semibold text-[#090A0b] transition-colors hover:bg-[#F2F2F2] hover:rounded-sm"
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="relative flex h-15 bg-[#4e197e] items-center px-10 md:hidden">
        <Swiper
          modules={[Navigation]}
          slidesPerView={2}
          slidesPerGroup={2}
          spaceBetween={0}
          navigation={{
            prevEl: ".category-prev",
            nextEl: ".category-next",
          }}
          className="h-full w-full"
        >
          {Object.entries(categories).map(([category, items]) => (
            <SwiperSlide
              key={category}
              className="flex h-full items-center justify-center"
            >
              <div className="group relative h-full">
                {/* Category */}
                <button className="relative h-full px-5 text-[17px] font-semibold text-white">
                  {category}

                  {category === "Gaming" && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.75 rounded-full bg-[#9B2EFF]" />
                  )}
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <button
          type="button"
          className="
            category-prev
            absolute
            left-2
            top-1/2
            z-100
            flex
            h-8
            w-8
            -translate-y-1/2
            items-center
            justify-center
            rounded-full
            bg-black
            text-white
            shadow-md
          "
        >
          <ChevronLeft size={18} />
        </button>

        {/* Next arrow */}
        <button
          type="button"
          className="
            category-next
            absolute
            right-2
            top-1/2
            z-100
            flex
            h-8
            w-8
            -translate-y-1/2
            items-center
            justify-center
            rounded-full
            bg-black
            text-white
            shadow-md
          "
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </nav>
  );
};

export default CategoryNavbar;
