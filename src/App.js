import Shipper from "components/shipper/Index";
import Transporter from "components/transporter/Index";
import Trucks from "components/transporter/Trucks";
import { AppWrapper } from "context/context";
import { Routes, Route } from "react-router-dom";
import Login from "./components/login/Login";

function App() {
  return (
    <AppWrapper>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/shipper" element={<Shipper />} />
        <Route path="/transporter/trucks" element={<Trucks />} />
      </Routes>
    </AppWrapper>
  );
}

export default App;
