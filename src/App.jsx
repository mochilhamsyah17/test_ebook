import { Route, Routes } from "react-router";
import "./App.css";
import AdminPage from "./components/AdminPage";
import BookDetails from "./components/BookDetails";
import BookDetailsUnlogedin from "./components/BookDetailsUnlogedin";
import AfterLogin from "./components/FetchingData/AfterLogin";
import BeforeLogin from "./components/FetchingData/AfterLogin";
import HomePage from "./components/LogedinHomePage";
import LoginPage from "./components/LoginPage/LoginPage";
import UnlogedinHomePage from "./components/UnlogedinHomePage";
import ViewPdf from "./components/ViewPdf";
import AboutUs from "./components/SubmenuBeforeLogin/AboutUs";
import ContactUs from "./components/SubmenuBeforeLogin/ContactUs";
import Katalog from "./components/SubmenuBeforeLogin/Katalog";
import { AuthProvider } from "./components/Auth";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<UnlogedinHomePage />} />
        <Route path="/homePage" element={<HomePage />} />
        <Route path="/homePage/dataBuku/:id" element={<BookDetails />} />
        <Route path="/dataBuku/:id" element={<BookDetailsUnlogedin />} />
        <Route path="/dataBuku/View" element={<ViewPdf />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/adminPage" element={<AdminPage />} />

        {/* Navbar BeforeLogin */}
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/katalog" element={<Katalog />} />
      </Routes>
    </>
  );
}

export default App;
