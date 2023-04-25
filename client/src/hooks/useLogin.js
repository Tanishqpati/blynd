import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useAuthContext } from './useAuthContext'

export const useLogin = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const [cookies, setCookie, removeCookie] = useCookies(null);
  const { dispatch } = useAuthContext()

  const login = async (email, password) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch(
      process.env.REACT_APP_API_URL + "/api/user/login",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      }
    );
    const user = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(user.error);
    }
    if (response.ok) {
      const { name, email, UserId, token } = user;

      // save the user to local storage
      const localUser = JSON.stringify({ name, email, UserId });
      sessionStorage.setItem("user", localUser);
      console.log(localUser)

      // set cookies
      setCookie("UserId", UserId);
      // sessionStorage.setItem("UserId", UserId);

      setCookie("AuthToken", token);

      // update the auth context
      dispatch({type: 'LOGIN', payload: user})


      // update loading state
      setIsLoading(false);

      // navigate to the dashboard
      navigate("/dashboard/matches");
    }
  };

  return { login, isLoading, error };
};
