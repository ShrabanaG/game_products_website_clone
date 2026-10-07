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
              {/* Header / Banner Section */}
              <header className="w-full bg-purple-700 text-white p-6 text-center">
                <h1 className="text-2xl font-bold">Gaming Consoles Banner</h1>
              </header>

              {/* 
        CRITICAL PARENT LAYER: 
        This row bounds the sticky sidebar. Once this div ends, the sidebar un-sticks.
      */}
              <h2 className="text-xl font-bold mb-4">Gaming Gadgets On Rent</h2>

              <ProductGrid />
            </main>
          </div>

          {/* FOOTER SECTION: The sidebar will NOT scroll into this zone */}
          <footer className="w-full bg-gray-800 text-gray-400 p-12 text-center mt-auto">
            <p>Footer Content — Sidebar un-sticks before this area starts.</p>
          </footer>
        </div>
      </main>
    </div>
  );
}

export default App;
