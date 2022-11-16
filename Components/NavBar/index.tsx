import Link from "next/link";
import { useRouter } from "next/router";
import { navigationLinks } from "../../utils/data";
import styles from "./NavBar.module.css";

export const NavBar = () => {
  const router = useRouter();

  return (
    <ul className={styles.list}>
      {navigationLinks.map((link, index) => (
        <li
          key={index}
          className={[
            styles.listItem,
            link.path.includes(router.pathname) ? styles.listItemActive : null,
          ].join(" ")}
        >
          <Link href={link.path[0]}>{link.label}</Link>
        </li>
      ))}
    </ul>
  );
};
