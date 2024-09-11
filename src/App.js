import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import StepForm from './components/StepForm';
import ECommerce from './components/ECommerce';
import ItemList from './components/ItemList';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-white shadow-lg">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex justify-between">
              <div className="flex space-x-7">
                <div>
                  <Link to="/" className="flex items-center py-4 px-2">
                    <span className="font-semibold text-gray-500 text-lg">MultiFeature App</span>
                  </Link>
                </div>
                <div className="hidden md:flex items-center ml-auto space-x-4">
  <Link
    to="/"
    className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300 ease-in-out transform hover:scale-105"
  >
    Step Form
  </Link>
  <Link
    to="/ecommerce"
    className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300 ease-in-out transform hover:scale-105"
  >
    E-Commerce
  </Link>
  <Link
    to="/items"
    className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300 ease-in-out transform hover:scale-105"
  >
    Item List
  </Link>
</div>

              </div>
            </div>
          </div>
        </nav>

        <div className="max-w-6xl mx-auto mt-8 px-4">
          <Routes>
            <Route path="/" element={<StepForm />} />
            <Route path="/ecommerce" element={<ECommerce />} />
            <Route path="/items" element={<ItemList />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;