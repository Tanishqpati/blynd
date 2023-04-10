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
import { Navigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useEffect, useState } from "react";

function App() {
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const AuthToken = cookies.AuthToken;
  // const [AuthToken, setAuthToken] = useState();
  // useEffect(() => {
  //   setAuthToken(cookies.AuthToken);
  // }, []);
  // useEffect(() => {
  //   console.log(AuthToken);
  // })

  // useEffect(() => {
   
  //   setAuthToken(cookies.AuthToken);
  //   console.log(AuthToken)
  // }, [])
  

  // const user = JSON.parse(localStorage.getItem('user'));

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/login"
          element={
            !AuthToken ? <Login /> : <Navigate to="/dashboard/matches" />
          }
        />
        <Route
          path="/signup"
          element={
            !AuthToken ? <Signup /> : <Navigate to="/dashboard/matches" />
          }
        />
        <Route
          path="/name"
          element={
            !AuthToken ? <NamePage /> : <Navigate to="/dashboard/matches" />
          }
          // element={<NamePage />}
        />
        <Route
          path="/gender"
          element={
            !AuthToken ? <GenderPage /> : <Navigate to="/dashboard/matches" />
          }
          // element={<GenderPage />}
        />
        <Route
          path="/interest"
          element={
            !AuthToken ? <Interest /> : <Navigate to="/dashboard/matches" />
          }
          // element={<Interest />}
        />
        <Route
          path="/more-info"
          element={
            !AuthToken ? <MoreInfoPage /> : <Navigate to="/dashboard/matches" />
          }
          // element={<MoreInfoPage />}
        />
        <Route
          path="/select-interest"
          element={
            !AuthToken ? (
              <SelectInterest />
            ) : (
              <Navigate to="/dashboard/matches" />
            )
          }
          // element={<SelectInterest />}
        />
        <Route
          path="/upload-pictures"
          element={
            !AuthToken ? (
              <UploadPicture />
            ) : (
              <Navigate to="/dashboard/matches" />
            )
          }
          // element={<UploadPicture />}
        />
        <Route
          path="/dashboard/matches"
          // element={AuthToken ? <Dashboard /> : <Navigate to="/login" />}
          element={<Dashboard />}
        />
        <Route
          path="/profile/editprofile"
          element={AuthToken ? <DateProfile /> : <Navigate to="/login" />}
          // element={<DateProfile />}
        />
        <Route
          path="/profile/settings"
          element={AuthToken ? <Settings /> : <Navigate to="/login" />}
          // element={<Settings />}
        />
        <Route
          path="/profile/contactfaqs"
          element={AuthToken ? <ContactFaqs /> : <Navigate to="/login" />}
          // element={<ContactFaqs />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
