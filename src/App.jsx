import Header from "./components/header/Header";
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

              {/* Simulated long grid of product cards */}
              <div className="grid grid-cols-1 md-grid-cols-2 lg:grid-cols-3 gap-4">
                {[...Array(12)].map((_, index) => (
                  <div
                    key={index}
                    className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm h-64"
                  >
                    <span className="text-xs font-semibold px-2 py-0.5 rounded bg-orange-100 text-orange-600">
                      Trending
                    </span>
                    <div className="h-40 bg-gray-100 mt-2 rounded flex items-center justify-center">
                      Product Image {index + 1}
                    </div>
                  </div>
                ))}
              </div>
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
