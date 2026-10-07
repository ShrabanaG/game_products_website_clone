import { useEffect, useState } from "react";

import FAQSection from "./components/FAQSection";
import RentalDateModal from "./components/RentalDateModal";
import FloatingSelectDateButton from "./components/FloatingSelectDateButton";
import Footer from "./components/Footer";
import Header from "./components/header/Header";
import ProductGrid from "./components/products/ProductsGrid";
import Sidebar from "./components/Sidebar";

import { GamingBannerLeft, GamingBannerRight } from "./assets";
import XBOXLOGO from "./assets/images/XBOX.svg";
import PS5LOGO from "./assets/images/PS5.svg";
import METALOGO from "./assets/images/Meta.svg";

function App() {
  const [isRentalModalOpen, setIsRentalModalOpen] = useState(false);

  useEffect(() => {
    const hasSeenModal = localStorage.getItem("rental-modal-seen");

    if (!hasSeenModal) {
      setIsRentalModalOpen(true);

      localStorage.setItem("rental-modal-seen", "true");
    }
  }, []);

  return (
    <div>
      <Header />
      <main>
        <div className="min-h-screen bg-gray-50 flex flex-col">
          <div className="flex flex-1 max-w-7xl w-full mx-auto p-4 items-start gap-6">
            {/* SIDEBAR CONTAINER */}
            <Sidebar />

            {/* MAIN PRODUCT GRID SECTION */}
            <main className="flex-1">
              <div className="relative flex h-full min-h-37.5 w-full items-center justify-center overflow-hidden rounded-xl max-md:shadow-lg md:min-h-57 lg:rounded-xl product-list-banner">
                <div className="absolute hidden md:flex overflow-hidden left-0 -bottom-9 sm:-bottom-10 md:-bottom-12 z-0">
                  <img
                    src={GamingBannerLeft}
                    alt="gamming_banner_left"
                    width={250}
                    height={250}
                    className="w-48 object-contain md:h-auto md:w-44"
                  />
                </div>
                <div className="absolute overflow-hidden right-0 -bottom-11 sm:-bottom-10 md:-bottom-12 md:right-0 z-0">
                  <img
                    src={GamingBannerRight}
                    alt="gamming_banner_right"
                    width={250}
                    height={250}
                    className="w-48 object-contain md:h-auto md:w-44"
                  />
                </div>
                <div className="relative z-10 flex w-full flex-col items-start justify-center gap-1.5 px-4 text-center text-white md:items-center md:gap-3">
                  <h1 className="text-xl product-list-banner-header font-bold capitalize leading-tight tracking-wide drop-shadow-lg md:text-3xl">
                    Gaming Consoles
                  </h1>
                  <div className="flex flex-col items-center md:gap-1">
                    <div className="w-[75%] text-xl font-bold opacity-100 drop-shadow-md sm:text-lg md:max-w-[70%] tracking-wider">
                      Rent the latest gaming gadgets from
                      <span className="mx-1 inline-flex w-14 items-center justify-center align-middle md:w-20">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="86"
                          height="27"
                          fill="#fff"
                          viewBox="0 0 86 27"
                        >
                          <path
                            fill="inherit"
                            fill-rule="evenodd"
                            d="M2.3 18.159h5.787c.173 1.14 1.544 1.962 3.262 1.962 1.775 0 2.886-.707 2.886-1.746 0-.765-.39-1.212-2.352-1.818l-2.18-.664c-3.478-1.054-5.325-2.93-5.325-5.773 0-4.243 3.666-7.014 8.717-7.014 5.368 0 8.644 2.454 8.673 6.581h-5.585c-.043-1.241-1.212-2.064-2.944-2.064-1.602 0-2.64.722-2.64 1.703 0 .837.576 1.415 2.25 1.905l2.28.664c3.738 1.082 5.355 2.641 5.355 5.643 0 4.387-3.753 7.115-9.251 7.115-5.614 0-8.919-2.381-8.933-6.494m17.816 6.133 4.43-20.825h5.687L28.66 10.77h.115c1.184-1.732 2.973-2.728 5.181-2.728 2.916 0 4.85 1.775 4.85 4.416a9.7 9.7 0 0 1-.217 1.948l-2.078 9.886h-5.672l1.89-9.005c.073-.376.102-.679.102-.982 0-1.097-.91-1.905-2.165-1.905-1.371 0-2.555 1.04-2.872 2.54l-1.977 9.352zm28.73 0h5.714l3.392-15.933h-5.585l-.549 2.57h-.274c-.505-1.704-2.294-2.8-4.59-2.8-4.574 0-7.965 4.416-7.965 10.347 0 3.738 2.034 6.047 5.31 6.047 2.006 0 3.594-.823 4.763-2.482h.26zm1.702-8.948c0 2.57-1.587 4.835-3.406 4.835-1.342 0-2.236-1.068-2.236-2.684 0-2.7 1.53-4.878 3.434-4.878 1.342 0 2.208 1.068 2.208 2.727m5.056 8.948 3.42-15.933h5.586l-.462 2.31h.115c.722-1.487 2.136-2.54 3.854-2.54.909 0 1.558.13 2.193.418l-1.082 4.95c-.736-.346-1.429-.592-2.396-.592-1.89 0-3.261 1.054-3.738 3.248l-1.76 8.139zm13.466-6.898c0 4.589 2.973 7.288 7.533 7.288 3.037 0 5.725-1.882 7.18-4.844-6.297.382-9.34-2.32-9.34-2.32s5.225.941 10.253-.404q.123-.617.182-1.267c.47-5.161-2.502-7.892-6.774-7.892-5.426 0-9.034 3.983-9.034 9.439m5.657-2.944h5.397c.03-.073.044-.303.044-.462 0-1.213-.953-2.078-2.324-2.078-1.486 0-2.742 1.024-3.117 2.54"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="51"
                          height="27"
                          viewBox="0 0 51 27"
                          fill="#fff"
                        >
                          <path
                            fill="inherit"
                            fill-rule="evenodd"
                            d="M4.786 3.106h8.14c5.075 0 7.917 2.679 7.917 6.682 0 5.477-3.84 8.93-10 8.93H7.791l-1.25 5.863H.247l1.07-5.06c6.5-1.309 10.317-6.29 10.317-6.29l2.168 1.84 1.601-8.78-8.404 3.004 2.04 1.731s-2.377 3.315-7.047 5.296zm31.4 21.475h-5.892l.49-2.322h-.267c-1.206 1.712-2.843 2.56-4.911 2.56-3.378 0-5.477-2.381-5.477-6.236 0-6.116 3.498-10.67 8.215-10.67 2.366 0 4.212 1.131 4.733 2.887h.282l.566-2.649h5.76zm-7.648-4.242c1.875 0 3.512-2.336 3.512-4.985 0-1.711-.893-2.813-2.277-2.813-1.965 0-3.542 2.248-3.542 5.03 0 1.667.923 2.768 2.307 2.768M42.825 3.106l-4.569 21.475h5.893l4.57-21.475z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </span>
                      PS5, Xbox, Oculus VR, Racing Wheel on rent.
                    </div>
                  </div>
                  <div className="flex w-full flex-wrap items-center justify-center gap-0 md:mt-3 md:max-w-lg md:gap-2">
                    <div className="h-auto w-12 object-contain md:w-24">
                      <img
                        src={XBOXLOGO}
                        width={200}
                        height={100}
                        className="h-auto w-full object-contain"
                      />
                    </div>
                    <span className="h-4 w-0.5 rounded-full opacity-50 md:h-6 md:w-0.75 md:opacity-70 bg-[#8A2BE2]" />
                    <div className="h-auto w-12 object-contain md:w-24">
                      <img
                        src={PS5LOGO}
                        alt="ps5_logo"
                        width={200}
                        height={100}
                        className="h-auto w-full object-contain"
                      />
                    </div>
                    <span className="h-4 w-0.5 rounded-full opacity-50 md:h-6 md:w-0.75 md:opacity-70 bg-[#8A2BE2]" />
                    <div className="h-auto w-12 object-contain md:w-24">
                      <img
                        src={METALOGO}
                        alt="meta_logo"
                        width={200}
                        height={100}
                        className="h-auto w-full object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="text-xl font-bold mb-4">Gaming Gadgets On Rent</h2>

              <ProductGrid />
            </main>
          </div>

          {/* FAQ Section */}
          <section className="container w-full h-full mx-auto py-10 p-4">
            <div className="flex flex-col items-start bg-white rounded-3xl py-10 px-6">
              <p className="font-bold text-sm md:text-xl text-black">
                Frequently Asked Questions (FAQs)
              </p>
              <FAQSection />
            </div>
          </section>
          <footer className="w-full bg-[#030d31] text-gray-400 p-12 text-center mt-auto">
            <Footer />
          </footer>
        </div>
      </main>
      <FloatingSelectDateButton onClick={() => setIsRentalModalOpen(true)} />
      <RentalDateModal
        isOpen={isRentalModalOpen}
        onClose={() => setIsRentalModalOpen(false)}
      />
    </div>
  );
}

export default App;
