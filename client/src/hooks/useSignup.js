import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useSignup = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  const signup = async (name, email, password) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch(process.env.REACT_APP_API_URL+"/api/user/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });
    const user = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(user.error);
    }
    if (response.ok) {
      // save the user to local storage
      const localUser = JSON.stringify(user);
      localStorage.setItem("user", localUser);
      // update loading state
      setIsLoading(false);

      navigate("/name");
    }
  };

  return { signup, isLoading, error };
};
