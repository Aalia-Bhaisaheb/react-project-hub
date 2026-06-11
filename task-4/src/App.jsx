import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutPage        from "./pages/AboutPage";
import BrandBuildingPage from "./pages/BrandBuildingPage";
import CreativeMarketingPage from "./pages/CreativeMarketingPage";
import ScrollToTop from "./components/ScrollToTop";
import BusinessHighlightPage from "./pages/BusinessHighlightsPage";
import CaseStudyPage from "./pages/CaseStudyPage";
import ConnectCornerPage from "./pages/ConnectCornerPage";
import NextGenBrandingPage from "./pages/NextGenBrandingPage";
import StrategicPromotionPage from "./pages/StrategicPromotionPage";
import MarketInsightsPage from "./pages/MarketInsightsPage";

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Routes>
        <Route path="/" element={<NextGenBrandingPage/>} />
        <Route path="/strategic-promotion" element={<StrategicPromotionPage/>}/>
        <Route path="/market-insights" element={<MarketInsightsPage/>}/>
        <Route path="/about-us"                 element={<AboutPage />} />
        <Route path="/brand-building"   element={<BrandBuildingPage />} />
        <Route path="/creative-marketing" element={<CreativeMarketingPage/>} />
        <Route path="/business-highlight" element={<BusinessHighlightPage/>}/>
        <Route path="/case-study" element={<CaseStudyPage/>}/>
        <Route path="/connect-corner" element={<ConnectCornerPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;