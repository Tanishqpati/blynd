import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

export const useLogin = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const [cookies, setCookie, removeCookie] = useCookies(null);
  


  // const login = async (email, password) => {
  //   setIsLoading(true)
  //   setError(null)

  //   const response = await fetch('/api/user/login', {
  //     method: 'POST',
  //     headers: {'Content-Type': 'application/json'},
  //     body: JSON.stringify({ email, password })
  //   })
  //   const user = await response.json()

  //   if (!response.ok) {
  //     setIsLoading(false)
  //     setError(user.error)
  //   }
  //   if (response.ok) {
  //     // save the user to local storage
  //     // localStorage.setItem('user', JSON.stringify(json))

  //     const localUser = JSON.stringify(user);
  //     localStorage.setItem("user", localUser);

  //     // console.log(response)
  //     setCookie("Email", user.email);
  //     setCookie("UserId", user.UserId);
  //     setCookie("AuthToken", user.token);

  //     // update the auth context
  //     dispatch({type: 'LOGIN', payload: user})

  //     // update loading state
  //     setIsLoading(false)
  //     // navigate("/dashboard/matches")
  //   }
  // }
  const login = async (email, password) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch(process.env.REACT_APP_API_URL+"/api/user/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const user = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(user.error);
    }
    if (response.ok) {
      const { name, email, UserId, token } = user;

      // save the user to local storage
      const localUser = JSON.stringify({ name, email, UserId });
      localStorage.setItem("user", localUser);

      // set cookies
      setCookie("UserId", UserId);
      setCookie("AuthToken", token);


      // update loading state
      setIsLoading(false);

      // navigate to the dashboard
      navigate("/dashboard/matches");
    }
  };

  return { login, isLoading, error };
};
