import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import Home from "../src/components/Home"
import Login from "../src/components/Login"
import Dashboardlayout from './components/Userdashboard/Dashboard';
import Homepage from "./components/Userdashboard/Homepage";
import Welcome from "./components/Userdashboard/Welcome";
import Registration from "./components/Userdashboard/Registration/Registration";
import Weeklypayout from "./components/Userdashboard/Weeklypayout/Weeklypayout";
import Directaffilate from "./components/Userdashboard/Directaffilate.jsx";
import Genealogy from "./components/Userdashboard/Geneology/Geneology.jsx";
import Reports from "./components/Userdashboard/Reports/Reports.jsx";
import Wallet from "./components/Userdashboard/Ewallet/Wallet.jsx";
import Hometopup from './Topupdashboard/Hometopup.jsx';
import Topupdashboardlayout from './Topupdashboard/Topupdashboardlayout.jsx';
import Wallethistory from "./Topupdashboard/Wallethistory/Wallethistory.jsx";
import Customersubscription from "./Topupdashboard/Customersubcription/Customersubcription.jsx";
import Billing from "./Topupdashboard/Billingproduct/Billing.jsx";
function App() {
 

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/userdashboard" element={<Dashboardlayout><Homepage/></Dashboardlayout>} />
        <Route path="/userdashboard/welcome" element={<Dashboardlayout><Welcome/></Dashboardlayout>} />
        <Route path='/userdashboard/register' element={<Dashboardlayout><Registration/></Dashboardlayout>} />
        <Route path='/userdashboard/weeklypayout' element={<Dashboardlayout><Weeklypayout /></Dashboardlayout>} />
        <Route path='/userdashboard/directaffilate' element={<Dashboardlayout><Directaffilate /></Dashboardlayout>} />
        <Route path='/userdashboard/genealogy' element={<Dashboardlayout><Genealogy /></Dashboardlayout>} />
        <Route path='/userdashboard/reports' element={<Dashboardlayout><Reports /></Dashboardlayout>} />
        <Route path='/userdashboard/ewallet' element={<Dashboardlayout><Wallet /></Dashboardlayout>} />
        {/* Topup dashboard */}
      <Route path='/topupdashboard/home' element={<Topupdashboardlayout><Hometopup/></Topupdashboardlayout>}  />
      <Route path='/topupdashboard/wallethistory' element={<Topupdashboardlayout><Wallethistory /></Topupdashboardlayout>} />
      <Route path='/topupdashboard/billing' element={<Topupdashboardlayout><Billing /></Topupdashboardlayout>} />
    
      <Route path='/topupdashboard/customersubscription' element={<Topupdashboardlayout><Customersubscription /></Topupdashboardlayout>} />
      </Routes>
    </Router> 
    </>
  )
}

export default App
