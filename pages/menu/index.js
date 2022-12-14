import React, { useState } from "react";
import FoodMenu from "../../components/Menus/Food/FoodMenu";
import HotDrinksMenu from "../../components/Menus/Drink/HotDrinks";
import ColdDrinksMenu from "../../components/Menus/Drink/ColdDrinks";
import Layout from "../../components/UI/Layout/Layout";
import styles from "./index.module.css";
import Footer from "../../components/Footer/Footer";

const Menu = () => {
  const [hotActiveState, setHotActiveState] = useState(false);
  const [coldActiveState, setColdActiveState] = useState(false);
  const [foodActiveState, setFoodActiveState] = useState(true);

  const clickTabHandler = (e) => {
    const id = e.target.id;
    if (id === "food") {
      setFoodActiveState(true);
      setColdActiveState(false);
      setHotActiveState(false);
    } else if (id === "hot") {
      setHotActiveState(true);
      setFoodActiveState(false);
      setColdActiveState(false);
    } else {
      setColdActiveState(true);
      setFoodActiveState(false);
      setHotActiveState(false);
    }
  };
  return (
    <Layout>
      <div className={styles.container}>
        <main className={styles.main}>
          <div className={styles.menu}>
            <h1>Menu</h1>
            <div className={styles.tabs}>
              <p
                className={hotActiveState ? styles.active : styles.option}
                onClick={clickTabHandler}
                id="hot"
              >
                Hot Drinks
              </p>
              <p
                className={foodActiveState ? styles.active : styles.option}
                onClick={clickTabHandler}
                id="food"
              >
                Food
              </p>
              <p
                className={coldActiveState ? styles.active : styles.option}
                onClick={clickTabHandler}
                id="cold"
              >
                Cold Drinks
              </p>
            </div>

            <div>
              {foodActiveState && <FoodMenu />}
              {coldActiveState && <ColdDrinksMenu />}
              {hotActiveState && <HotDrinksMenu />}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </Layout>
  );
};

export default Menu;
