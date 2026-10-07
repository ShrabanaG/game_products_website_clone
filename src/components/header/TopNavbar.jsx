import {
  MapPin,
  ShoppingCart,
  UserRound,
  Search,
  ChevronDown,
} from "lucide-react";

import Logo from "../../assets/logo";
import DateIconLight from "../../assets/icons/Date";
import DateIconDark from "../../assets/icons/DateIconDark";
import SearchIcon from "../../assets/icons/SearchIcon";
import CartIcon from "../../assets/icons/CartIcon";
import UserIcon from "../../assets/icons/UserIcon";

const TopNavbar = () => {
  return (
    <div className="h-max bg-[#4c187c] px-17 pb-4 text-white">
      <div className="flex items-end justify-between w-full gap-1">
        {/* Logo (left) */}
        <div className="flex items-end justify-start gap-28">
          <Logo />
        </div>
        {/* Search pill (center) */}
        <div className="relative flex items-center justify-center gap-2 rounded-full border-3 border-[#8a2be2] bg-white text-[#272733]">
          <button
            type="button"
            className="flex items-center justify-center gap-1 rounded-l-full bg-neutral-200 p-1.5 px-2.5 py-1.5 text-sm font-semibold text-primary-900 hover:bg-neutral-250 max-lg:translate-x-5 max-lg:rounded-full max-lg:text-xs"
          >
            <MapPin size={22} />
            <p className="min-w-16">Bangalore</p>
            <ChevronDown size={17} />
          </button>

          <button
            type="button"
            className="flex items-center justify-center gap-2 mr-2"
          >
            <DateIconLight />
            <p className="min-w-16 text-sm font-semibold">Delivery Date</p>
          </button>

          <button
            type="button"
            className="flex items-center justify-center gap-2"
          >
            <DateIconLight />
            <p className="min-w-16 text-sm font-semibold">Pickup Date</p>
          </button>

          <button
            type="button"
            className="inline-flex h-full items-center justify-center gap-1 whitespace-nowrap rounded-4xl bg-[#030d31] px-3 py-2 text-sm font-medium text-white ring-offset-background transition-colors hover:bg-[#030d31] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 active:opacity-90 disabled:pointer-events-none disabled:opacity-50 text-bt3! [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
          >
            <DateIconDark />
            <p className="pr-1 font-semibold leading-5 tracking-wide">Select</p>
          </button>
        </div>
        {/* Right actions */}
        <div className="flex items-end justify-end gap-3 transition-colors duration-300 fill-gray-100 text-gray-100">
          <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-4xl text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-transparent active:opacity-90 search relative h-11 w-11 p-2 text-gray-100 hover:bg-[#f4f6f7] hover:text-black">
            <SearchIcon />
          </button>

          <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-4xl text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-transparent active:opacity-90 search relative h-11 w-11 p-2 text-gray-100 hover:bg-[#f4f6f7] hover:text-black">
            <CartIcon />
          </button>

          <div className="flex cursor-pointer items-center justify-end gap-3">
            <button className="flex h-12 w-12 items-center justify-center rounded-full border-[3px] border-[#882bdd] bg-white text-black">
              <UserIcon />
            </button>
            <span className="text-bt2! font-semibold">Hi, Login</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
