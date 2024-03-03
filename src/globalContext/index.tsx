import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { User as FirebaseUser } from "firebase/auth";
import { auth } from "@/config/firebase";

type GlobalContextType = {
  user: FirebaseUser | null;
  loading: boolean;
};

const defaultValues: GlobalContextType = {
  user: null,
  loading: true,
};

const globalContext = createContext<GlobalContextType>(defaultValues);

export const useGlobalContext = () => {
  return useContext(globalContext);
};

const GlobalContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const values = {
    user,
    loading,
  };

  useEffect(() => {
    return auth.onAuthStateChanged((currentUser: FirebaseUser | null) => {
      console.log("test user app", currentUser);
      setLoading(false);
      setUser(currentUser);
    });
  }, []);

  return (
    <globalContext.Provider value={values}>{children}</globalContext.Provider>
  );
};

export default GlobalContextProvider;
