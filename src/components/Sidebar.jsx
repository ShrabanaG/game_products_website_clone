import { NavLink } from "react-router-dom";
import {
  AllCategoryIcon,
  RacingWheelImage,
  Ps5Image,
  GTAImage,
  ProjectorImage,
  XboxConsoleImage,
  VRImage,
} from "../assets";

const sidebarContent = [
  {
    header: "All",
    value: "all",
    image: AllCategoryIcon,
    link: "/",
  },
  {
    header: "GTA VI",
    value: "gta",
    image: GTAImage,
    link: "/gta-vi-on-rent",
  },
  {
    header: "PS5 Console",
    value: "ps5_console",
    image: Ps5Image,
    link: "/ps5-console-on-rent",
  },
  {
    header: "XBox Console",
    value: "xbox_console",
    image: XboxConsoleImage,
    link: "/xbox-console-on-rent",
  },
  {
    header: "VR",
    value: "vr",
    image: VRImage,
    link: "/vr-on-rent",
  },
  {
    header: "Racing Wheel",
    value: "racing_wheel",
    image: RacingWheelImage,
    link: "/gaming-controllers-on-rent",
  },
];

const Sidebar = () => {
  return (
    <aside
      className="sticky top-4 w-28 bg-white border border-gray-200 rounded-2xl shadow-sm p-3 
                 flex flex-col items-center gap-6 
                 max-h-[calc(75vh-2rem)] overflow-y-auto overscroll-contain scrollbar-none"
    >
      {sidebarContent.map((each) => {
        const { header, value, image, link } = each;
        return (
          <NavLink
            key={value}
            to={link}
            className="group flex flex-col items-center justify-center gap-0.5 transition-all duration-300 md:gap-1"
          >
            {({ isActive }) => (
              <>
                <div
                  className={`relative flex aspect-square w-12 items-center justify-center overflow-hidden rounded-lg p-1 transition-all duration-300 md:w-14 md:rounded-xl md:p-1.5 lg:w-16 border-2 ${
                    isActive
                      ? "border-[#1945e8] bg-blue-50/50"
                      : "border-[#EEECF0] bg-gray-100 group-hover:bg-gray-200"
                  }`}
                >
                  <img
                    src={image}
                    className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-110 scale-100"
                    width={80}
                    height={80}
                    alt={header}
                  />
                </div>

                <span
                  className={`line-clamp-2 max-w-12.5 text-center text-[10px] font-semibold leading-tight md:max-w-15 md:text-xs md:font-bold lg:max-w-20 lg:text-sh5 transition-colors duration-300 ${
                    isActive ? "text-[#1945e8] font-bold" : "text-[#090A0B]"
                  }`}
                >
                  {header}
                </span>
              </>
            )}
          </NavLink>
        );
      })}
    </aside>
  );
};

export default Sidebar;
