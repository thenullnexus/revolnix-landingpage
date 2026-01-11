import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Index from "./pages/Index";
import About from "./pages/About";
import Ventures from "./pages/Ventures";
import Contact from "./pages/Contact";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/" element={<Index />} />,
    <Route path="/about" element={<About />} />,
    <Route path="/ventures" element={<Ventures />} />,
    <Route path="/contact" element={<Contact />} />,
    <Route path="/terms" element={<Terms />} />,
    <Route path="/privacy" element={<Privacy />} />,
    <Route path="*" element={<NotFound />} />
  ]),
  {
    basename: import.meta.env.BASE_URL,
    future: {
      v7_relativeSplatPath: true,
      v7_startTransition: true,
    },
  }
);

export default router;
