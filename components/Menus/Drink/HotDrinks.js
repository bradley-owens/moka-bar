import ItemCard from "../ItemCard";
import styles from "../MenuLayout.module.css";

const HotDrinksMenu = () => {
  const hotDrinks = {
    coffee: [
      { name: "Babycino" },
      { name: "Cuppucino" },
      { name: "Espresso" },
      { name: "Flat White" },
      { name: "Long Black" },
      { name: "Macchiato" },
      { name: "Piccolo" },
      { name: "Chai Latte" },
      { name: "Dirty Chai" },
      { name: "Matcha Latte" },
      { name: "Hot Chocolate" },
      { name: "Mocha" },
    ],

    tea: [
      { name: "Early Grey" },
      { name: "English Breakfast" },
      { name: "Camomile" },
      { name: "Chai" },
      { name: "Green" },
      { name: "Peppermint" },
    ],
  };

  return (
    <div className={styles.container}>
      <div className={styles.type}>
        <h2>Coffee </h2>
        <div className={styles["menu-drinks"]}>
          {hotDrinks.coffee.map((item) => {
            return <ItemCard name={item.name} />;
          })}
        </div>
      </div>
      <div className={styles.type}>
        <h2>Tea</h2>
        <div className={styles["menu-drinks"]}>
          {hotDrinks.tea.map((item) => {
            return <ItemCard name={item.name} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default HotDrinksMenu;
