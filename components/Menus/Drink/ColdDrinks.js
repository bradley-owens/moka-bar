import ItemCard from "../ItemCard";
import styles from "../MenuLayout.module.css";

const ColdDrinksMenu = () => {
  const coldDrinks = {
    smoothies: [
      {
        name: "Filthy Monkey",
        description: "Milk, Cocoa Powder, Coffee, Honey, Banana & Ice.",
      },
      {
        name: "Super Smoothie",
        description:
          "Banana, Berries, Yoghurt, Acai, Honey, Milk & Bee Pollen.",
      },
      { name: "Mango", description: "Mix & Match" },
      { name: "Banana", description: "Mix & Match" },
      { name: "Berry", description: "Mix & Match" },
    ],
    milkshakes: [
      { name: "Caramel" },
      { name: "Strawberry" },
      { name: "Vanilla" },
      { name: "Chocolate" },
    ],

    juice: [
      {
        name: "Green Juice",
        description: "Cucumber, Spinach, Apple, Celery, Lemon & Coconut Water.",
      },
      {
        name: "Immune Booster",
        description: "Beetroot, Orange, Apple, Carrot, Ginger & Coconut Water.",
      },
      {
        name: "Summer Quencher",
        description:
          "Watermelon, Pineapple, Mint, Ginger, Lemon & Coconut Water.",
      },
    ],
  };

  return (
    <div className={styles.container}>
      <div className={styles.type}>
        <h2>Smoothies </h2>
        <div className={styles.menu}>
          {coldDrinks.smoothies.map((item) => {
            return <ItemCard name={item.name} description={item.description} />;
          })}
        </div>
      </div>

      <div className={styles.type}>
        <h2>Milkshakes</h2>
        <div className={styles.menu}>
          {coldDrinks.milkshakes.map((item) => {
            return <ItemCard name={item.name} description={item.description} />;
          })}
        </div>
      </div>

      <div className={styles.type}>
        <h2>Fresh Juice</h2>
        <div className={styles.menu}>
          {coldDrinks.juice.map((item) => {
            return <ItemCard name={item.name} description={item.description} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default ColdDrinksMenu;
