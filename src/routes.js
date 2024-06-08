import Default from "./components/Default";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Area from "./pages/Area";
import NotFound from "./pages/NotFound";
import Start from "./pages/Start";

const { BrowserRouter, Route, Routes } = require("react-router-dom");

function AppRoutes() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Default />}>
          <Route index element={<Start />} />
        </Route>
        <Route path="areas/:id" element={<Area />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default AppRoutes;
