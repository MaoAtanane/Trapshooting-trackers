import styles from "./LoginModal.module.scss";
import TextInput from "@/commons/TextInput";
import { useCallback, useState } from "react";
import Button from "@/commons/Button";

export default function LoginModal() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = useCallback(() => {}, [email, password]);
  return (
    <div className={styles.container}>
      <h1>Login</h1>
      <TextInput id="email" label="Email" onChange={setEmail} value={email} />
      <TextInput
        type="password"
        id="password"
        label="Password"
        onChange={setPassword}
        value={password}
      />
      <Button variant={"black"} onClick={handleLogin}>
        Login
      </Button>
    </div>
  );
}
