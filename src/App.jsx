import FAQSection from "./components/FAQSection";
import FloatingSelectDateButton from "./components/FloatingSelectDateButton";
import Footer from "./components/Footer";
import Header from "./components/header/Header";
import ProductGrid from "./components/products/ProductsGrid";
import Sidebar from "./components/Sidebar";

function App() {
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
              <header className="w-full bg-purple-700 text-white p-6 text-center">
                <h1 className="text-2xl font-bold">Gaming Consoles Banner</h1>
              </header>

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
      <FloatingSelectDateButton />
    </div>
  );
}

export default App;
