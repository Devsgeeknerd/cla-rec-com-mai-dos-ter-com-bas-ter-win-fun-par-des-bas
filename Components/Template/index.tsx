import { ReactElement } from "react";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { NavBar } from "../NavBar";
import styles from "./Template.module.css";

interface Props {
  children: ReactElement;
}

export const Template = ({ children }: Props) => {
  return (
    <div className={styles.container}>
      <Header />
      <NavBar />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
};
