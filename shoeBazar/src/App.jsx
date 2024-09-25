import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import HomePage from "./pages/HomePage";
import Header from "./components/layout/Header";
import Login from "./components/Auth/Login";
import AdminPage from "./pages/AdminPage";
import SignUp from "./components/Auth/SignUp";
import ProductManagement from "./components/Dashboard/ProductManagement";
import OrderManagement from "./components/Dashboard/OrderManagement";
import { ProductProvider } from "./context/ProductContext";
import ProductDetail from "./components/Dashboard/ProductDetail";
import ProductPage from "./pages/ProductPage";
import { CartProvider } from "./context/CartContext";
import CartPage from "./pages/CartPage";
import CheckOut from "./components/cart/CheckOut";
import OrderConfirmPage from "./pages/OrderConfirmPage";
import OrderList from "./components/cart/OrderList";
import Profile from "./components/profile/Profile";
import Footer from "./components/layout/Footer"
import PrivacyPolicy from "./components/razorpay/PrivacyPolicy";
import Terms from "./components/razorpay/Terms";
import About from "./components/razorpay/About";
import Contact from "./components/razorpay/Contact";
import RefundPolicy from "./components/razorpay/RefundPolicy";
import ShippingPolicy from "./components/razorpay/ShipingPolicy";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Router>
        <AuthProvider>
          <ProductProvider>
            <CartProvider>
              <Header />
              <main className="flex-grow pt-20 pb-20"> {/* Add pb-16 for footer space */}
                <div className="container mx-auto px-4">
                  <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/admin" element={<AdminPage />} />
                    <Route path="/register" element={<SignUp />} />
                    <Route path="/admin/product" element={<ProductManagement />} />
                    <Route path="/admin/order" element={<OrderManagement />} />
                    <Route path="/update-product/:id" element={<ProductDetail />} />
                    <Route path="/product/:id" element={<ProductPage />} />
                    <Route path="/cart" element={<CartPage />} />
                    <Route path="/checkout" element={<CheckOut/>}/>
                    <Route path="/order-confirmation" element={<OrderConfirmPage />} />
                    <Route path="/order" element={<OrderList />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/privacy-policy" element={<PrivacyPolicy/>}/>
                    <Route path="/terms-of-service" element={<Terms/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/contact" element={<Contact />}/>
                    <Route path="/refund" element={<RefundPolicy />}/>
                    <Route path="/shipping" element={<ShippingPolicy/>}/>
                    
                  </Routes>
                </div>
              </main>
              <Footer />
            </CartProvider>
          </ProductProvider>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;

