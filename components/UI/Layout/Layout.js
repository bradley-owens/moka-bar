import Navigation from "./Navigation";
import styles from "./Layout.module.css";

const Layout = (props) => {
  return (
    <div>
      <Navigation />
      <div className={styles.main}> {props.children}</div>
    </div>
  );
};

export default Layout;
