import Button from "@/commons/Button";
import { logout } from "@/api/auth";

export default function Home() {
  return (
    <div>
      <h1>Home </h1>
      <Button onClick={() => logout()}>Logout</Button>
    </div>
  );
}
