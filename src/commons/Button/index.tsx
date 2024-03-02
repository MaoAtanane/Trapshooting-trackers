import classnames from "classnames";
import styles from "./Button.module.scss";
import { ReactNode } from "react";

type ButtonProps = {
  children: string | null | ReactNode;
  onClick: () => void;
  variant?: "primary" | "secondary" | "black";
};
export default function Button({
  children,
  onClick,
  variant = "black",
}: ButtonProps) {
  return (
    <button
      className={classnames(styles.container, styles[variant])}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
