import styles from "./LoginModal.module.scss";
import TextInput from "@/commons/TextInput";
import { useCallback } from "react";
import Button from "@/commons/Button";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginWithUsernameAndPassword } from "@/api/auth";
import { useNavigate } from "react-router-dom";
import RoutesEnum from "@/router/RoutesEnum.tsx";

const SignUpSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(3).max(20),
});
type SignUpType = z.infer<typeof SignUpSchema>;
export default function LoginModal() {
  const navigate = useNavigate();

  const { control, handleSubmit } = useForm<SignUpType>({
    resolver: zodResolver(SignUpSchema),
  });

  const handleLogin = useCallback(({ email, password }: SignUpType) => {
    loginWithUsernameAndPassword({ email, password })
      .then((user) => {
        console.log(user);
        navigate(RoutesEnum.HOME);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <div className={styles.container}>
      <h1>Login</h1>
      <form
        className={styles.formContainer}
        onSubmit={handleSubmit(handleLogin)}
      >
        <TextInput id="email" name={"email"} label="Email" control={control} />
        <TextInput
          type="password"
          id="password"
          name={"password"}
          label="Password"
          control={control}
        />
        <Button variant={"black"}>Login</Button>
      </form>
    </div>
  );
}
