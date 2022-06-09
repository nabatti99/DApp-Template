import { BrowserRouter, Routes, Route } from "react-router-dom";
import Root from "layout/Root";
import { Home } from "views/Home/Home";

export default function Navigation({}) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route path="Home" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
