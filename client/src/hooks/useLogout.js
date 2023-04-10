import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

export const useLogout = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const navigate = useNavigate();

  const logout = () => {
    //remove user from storage
    console.log(cookies.UserId);
    removeCookie("UserId", cookies.UserId);
    removeCookie("AuthToken", cookies.AuthToken);
    // removeCookie('NID', cookies.NID)
    // localStorage.removeItem('user')
    // localStorage.removeItem('url1')
    // localStorage.removeItem('url2')
    // localStorage.removeItem('url3')
    // localStorage.removeItem('url4')
    // localStorage.removeItem('url5')
    // localStorage.removeItem('url6')
    // localStorage.removeItem('gender_interest')
    // localStorage.removeItem('gender_identity')
    // localStorage.removeItem('about')
    // localStorage.removeItem('dob_day')
    // localStorage.removeItem('dob_month')
    // localStorage.removeItem('dob_year')
    // localStorage.removeItem('height')
    // localStorage.removeItem('name')
    // localStorage.removeItem('personal_interests')
    navigate("/");
    window.location.reload();

    // localStorage.removeItem('name')

    // window.location.reload()
  };

  return { logout };
};
