import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/config/firebase";

export const loginWithUsernameAndPassword = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  try {
    return await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    throw error;
  }
};
