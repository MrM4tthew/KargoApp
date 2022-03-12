import Shipper from "./components/shipper/Index";
import Drivers from "./components/transporter/Drivers";
import Trucks from "./components/transporter/Trucks";
import { AppWrapper } from "context/context";
import { Routes, Route } from "react-router-dom";
import Transporter from "./components/transporter/Index";
import Login from "./components/login/Login";

function App() {
  return (
    <AppWrapper>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/shipper" element={<Shipper />} />
        <Route path="/transporter/trucks" element={<Trucks />} />
        <Route path="/transporter/drivers" element={<Drivers />} />
      </Routes>
    </AppWrapper>
  );
}

export default App;
