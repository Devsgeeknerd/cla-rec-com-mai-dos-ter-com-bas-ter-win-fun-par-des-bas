import { ReactElement } from "react";
import styles from "./Template.module.css";

interface Props {
  children: ReactElement;
}

export const Template = ({ children }: Props) => {
  return (
    <div className={styles.container}>
      <main>{children}</main>
    </div>
  );
};
