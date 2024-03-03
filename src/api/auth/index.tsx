import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/config/firebase";

export const loginWithUsernameAndPassword = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  return await signInWithEmailAndPassword(auth, email, password);
};

export const logout = async () => {
  return await auth.signOut();
};
