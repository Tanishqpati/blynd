import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useAuthContext } from './useAuthContext'

export const useLogout = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const navigate = useNavigate();
  const { dispatch } = useAuthContext()

  const logout = () => {
    //remove user from storage
    console.log(cookies.UserId);
    removeCookie("UserId", cookies.UserId);
    removeCookie("AuthToken", cookies.AuthToken);
    removeCookie('NID', cookies.NID)
    sessionStorage.removeItem('user')
    sessionStorage.removeItem('url1')
    sessionStorage.removeItem('url2')
    sessionStorage.removeItem('url3')
    sessionStorage.removeItem('url4')
    sessionStorage.removeItem('url5')
    sessionStorage.removeItem('url6')
    sessionStorage.removeItem('gender_interest')
    sessionStorage.removeItem('gender_identity')
    sessionStorage.removeItem('about')
    sessionStorage.removeItem('dob_day')
    sessionStorage.removeItem('dob_month')
    sessionStorage.removeItem('dob_year')
    sessionStorage.removeItem('height')
    sessionStorage.removeItem('name')
    sessionStorage.removeItem('personal_interests')
    sessionStorage.removeItem('name')
     // dispatch logout action
     dispatch({ type: 'LOGOUT' })
    navigate("/", {replace: true})


  };

  return { logout };
};
