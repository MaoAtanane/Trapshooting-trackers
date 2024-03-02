import LoginModal from "@/containers/LoginPage/LoginModal";
import styles from "./Login.module.scss";

export default function Login() {
  return (
    <div className={styles.container}>
      <LoginModal />
    </div>
  );
}
