import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Dashboard } from "./Components/Dashboard";
import MainLayout from "./Layout/Main";
import "./App.css";
import { Page2 } from "./Components/Page2";

const App = () => {
  return (
    <MainLayout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/page2" element={<Page2 />} />
        </Routes>
      </BrowserRouter>
    </MainLayout>
  );
};

export default App;
