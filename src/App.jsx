import { createContext, useState } from "react";
import Header from "./pages/Header";
import Hero from "./pages/Hero";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import Testimonials from "./pages/Testimonial";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import MessageUs from "./components/MessageUs";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PlanCheckout from "./components/PlanCheckout";
import SignUpForm from "./components/SignUpForm";
import CookieConsent from "./components/AcceptCookies";
import Headroom from "react-headroom";
import SidebarSmall from "./components/SidebarSmall";
import Satisfaction from "./pages/Satisfaction";

export const FormContext = createContext(null);

function App() {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const closeForm = () => setIsFormVisible(false);
  const [theme, setTheme] = useState("light");
  const [isOpen, setIsOpen] = useState(false);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <FormContext.Provider
      value={{
        isFormVisible,
        setIsFormVisible,
        theme,
        toggleTheme,
        isOpen,
        setIsOpen,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Headroom className="z-[999]">
                  <Header />
                </Headroom>
                <Hero />
                <Features />
                <Testimonials />
                <Pricing />
                <Satisfaction />
                <Contact />
                <Footer />
                <MessageUs />
                {/* Sign Up Form Overlay */}
                <SignUpForm
                  theme={theme}
                  isVisible={isFormVisible}
                  onClose={closeForm}
                />
                <CookieConsent />
                {/* Sidebar */}
                <SidebarSmall />
              </>
            }
          />
          <Route path="/plan-checkout/:id" element={<PlanCheckout />} />
        </Routes>
      </BrowserRouter>
    </FormContext.Provider>
  );
}

export default App;
