import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import NamePage from "./pages/NamePage/NamePage";
import GenderPage from "./pages/GenderPage/GenderPage";
import Interest from "./pages/InterestPage/Interest";
import UploadPicture from "./pages/UploadPictures/UploadPicture";
import Dashboard from "./pages/Dashboard/Dashboard";
import MoreInfoPage from "./pages/MoreInfoPage/MoreInfoPage";
import SelectInterest from "./pages/SelectInterest/SelectInterest";
import Settings from "./pages/Settings/Settings";
import DateProfile from "./pages/DateProfile/DateProfile";
import ContactFaqs from "./pages/ContactFaqs/ContactFaqs";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/name" element={<NamePage />}/>
        <Route path="/gender" element={<GenderPage />}/>
        <Route path="/interest" element={<Interest />}/>
        <Route path="/more-info" element={<MoreInfoPage />}/>
        <Route path="/select-interest" element={<SelectInterest />}/>
        <Route path="/upload-pictures" element={<UploadPicture />}/>
        <Route path="/dashboard/matches" element={<Dashboard />}/>
        <Route path="/profile/editprofile" element={<DateProfile />}/>
        <Route path="/profile/settings" element={<Settings />}/>
        <Route path="/profile/contactfaqs" element={<ContactFaqs />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
