import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import User from "../types/user";

const env = import.meta.env;

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext<{
  userData: User;
  isAuthenticated: boolean;
}>({
  userData: {
    client_id: null,
    connection: null,
    email: null,
    email_verified: null,
    form: null,
    is_signup: false,
    request_language: null,
    tenant: null,
    transaction: null,
    usePassKey: null,
    username: null,
    _id: null,
  },
  isAuthenticated: false,
});
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const { user, isAuthenticated } = useAuth0();
  const [userData, setUserData] = useState<User>({
    client_id: null,
    connection: null,
    email: null,
    email_verified: null,
    form: null,
    is_signup: false,
    request_language: null,
    tenant: null,
    transaction: null,
    usePassKey: null,
    username: null,
    _id: null,
  });
  const [userId, setUserId] = useState<null | string>(
    env.VITE_IS_LOGGED_SPEUDAL ? env.VITE_SPEUDAL_ID : null
  );

  const fetchUserData = async () => {
    try {
      const res = await axios.get(
        `${env.VITE_BACKEND_URI}/getUserData?userId=${userId}`
      );
      setUserData(res.data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    if (userId) fetchUserData();
  }, [userId]);

  useEffect(() => {
    if (user && user.sub && env.VITE_IS_LOGGED_SPEUDAL === false) {
      setUserId(user.sub.split("|")[1]);
    }
  }, [user]);

  const value = {
    userData,
    isAuthenticated: env.VITE_IS_LOGGED_SPEUDAL ?? isAuthenticated,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
