import Shipper from "components/shipper/Index";
import Transporter from "components/transporter/Index";
import {
  Routes,
  Route,
} from "react-router-dom";
import Login from "./components/login/Login";
function App() {
  
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/shipper" element={<Shipper />} />
      <Route path="/transporter" element={<Transporter />} />
    </Routes>
  );
}

export default App;
