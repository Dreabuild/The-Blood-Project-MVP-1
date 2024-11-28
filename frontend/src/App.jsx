import { Route, Routes } from "react-router";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ResetPassword from "./pages/ResetPassword";
import Dashboard from "./pages/Dashboard";
import Inventory from "./pages/Inventory";
import AddInventory from "./pages/AddInventory";
import Settings from "./pages/Settings";
import ForgotPassword from "./pages/ForgotPassword";

function App() {
 return (
  <>
   <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/forgot-password" element={<ForgotPassword />} />
    <Route path="/reset-password/:token" element={<ResetPassword />} />
    <Route path="/" element={<Dashboard />} />
    <Route path="/inventory" element={<Inventory />} />
    <Route path="/inventory/add" element={<AddInventory />} />
    <Route path="/settings" element={<Settings />} />
   </Routes>
  </>
 );
}

export default App;
