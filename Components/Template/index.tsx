import { ReactElement } from "react";
import { NavBar } from "../NavBar";
import styles from "./Template.module.css";

interface Props {
  children: ReactElement;
}

export const Template = ({ children }: Props) => {
  return (
    <div className={styles.container}>
      <NavBar />
      <main className={styles.main}>{children}</main>
    </div>
  );
};
