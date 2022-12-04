import ItemCard from "../../UI/MenuItems/ItemCard";
import styles from "../MenuLayout.module.css";

const HotDrinksMenu = () => {
  const hotDrinks = [
    {
      name: "Coffee",
      description:
        "Babycino, Cuppucino, Espresso, Flat White, Long Black, Macchiato, Piccolo, Chai Latte, Matcha Latte, Hot Chocolate & Mocha.",
    },

    {
      name: "Tea",
      description:
        "Early Grey, English Breakfast, Camomile, Chai, Green & Peppermint.  ",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.type}>
        <h2>Hot Drinks </h2>
        <div className={styles["menu-drinks"]}>
          {hotDrinks.map((item) => {
            return <ItemCard name={item.name} description={item.description} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default HotDrinksMenu;
