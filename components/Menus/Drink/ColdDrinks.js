import ItemCard from "../../UI/MenuItems/ItemCard";
import styles from "../MenuLayout.module.css";

const ColdDrinksMenu = () => {
  const coldDrinks = {
    coffee: [
      {
        name: "Iced Frappe",
        description: "Coffee or Chocolate",
        price: "$6.50",
      },
      {
        name: "Iced Latte",
        price: "$4.50 / $6.70",
      },
      {
        name: "Iced Long Black",
        price: "$5",
      },
      {
        name: "Iced Mocha",
        price: "$7.20",
      },
      {
        name: "Iced Chocolate",
        price: "$5.70",
      },
      {
        name: "Iced Chai Latte",
        price: "$6.20",
      },
      {
        name: "Iced Dirty Chai",
        price: "$7.20",
      },
      {
        name: "Ice-Cream Scoop",
        price: "$1",
      },
    ],
    smoothies: [
      {
        name: "Filthy Monkey",
        description: "Milk, Cocoa Powder, Coffee, Honey, Banana & Ice.",
        price: "$9",
      },
      {
        name: "Super Smoothie",
        description:
          "Banana, Berries, Yoghurt, Acai, Honey, Milk & Bee Pollen.",
        price: "$9",
      },

      { name: "Mango", description: "Mix & Match", price: "$7" },
      { name: "Banana", description: "Mix & Match", price: "$7" },
      { name: "Berry", description: "Mix & Match", price: "$7" },
    ],
    shakes: [
      { name: "Caramel", price: "$5.70 / $6.70" },
      { name: "Strawberry", price: "$5.70 / $6.70" },
      { name: "Vanilla", price: " $5.70 / $6.70" },
      { name: "Chocolate", price: "$5.70 / $6.70" },
    ],

    juice: [
      {
        name: "Green Juice",
        description: "Cucumber, Spinach, Apple, Celery, Lemon & Coconut Water.",
        price: "$8",
      },
      {
        name: "Immune Booster",
        description: "Beetroot, Orange, Apple, Carrot, Ginger & Coconut Water.",
        price: "$8",
      },
      {
        name: "Summer Quencher",
        description:
          "Watermelon, Pineapple, Mint, Ginger, Lemon & Coconut Water.",
        price: "$8",
      },
    ],
    others: [
      {
        name: "Soft Drinks",
        price: "$2.50",
      },
      {
        name: "Iced Tea",
        price: "$3",
      },
      {
        name: "Gatorade",
        price: "$4.50",
      },
      {
        name: "Kombucha",
        price: "$4.90",
      },
      {
        name: "V",
        price: "$3.50",
      },
      {
        name: "E&T Juice",
        price: "$4.80",
      },
      {
        name: "Poppers",
        price: "$2.50",
      },
      {
        name: "Sparkling Water",
        price: "$3.50",
      },
      {
        name: "Water",
        price: "$2.50",
      },
    ],
  };

  return (
    <div className={styles.container}>
      <div className={styles.type}>
        <h2>Iced Beverages </h2>
        <div className={styles["menu-4"]}>
          {coldDrinks.coffee.map((item) => {
            return (
              <ItemCard
                name={item.name}
                description={item.description}
                price={item.price}
              />
            );
          })}
        </div>
      </div>
      <div className={styles.type}>
        <h2>Smoothies </h2>
        <div className={styles["menu-3"]}>
          {coldDrinks.smoothies.map((item) => {
            return (
              <ItemCard
                name={item.name}
                description={item.description}
                price={item.price}
              />
            );
          })}
        </div>
      </div>

      <div className={styles.type}>
        <h2>Fresh Juice</h2>
        <div className={styles["menu-3"]}>
          {coldDrinks.juice.map((item) => {
            return (
              <ItemCard
                name={item.name}
                description={item.description}
                price={item.price}
              />
            );
          })}
        </div>
      </div>

      <div className={styles.type}>
        <h2>Milkshakes / ThickShakes</h2>
        <div className={styles["menu-4"]}>
          {coldDrinks.shakes.map((item) => {
            return (
              <ItemCard
                name={item.name}
                description={item.description}
                price={item.price}
              />
            );
          })}
        </div>
      </div>
      <div className={styles.type}>
        <h2>Other Drinks</h2>
        <div className={styles["menu-3"]}>
          {coldDrinks.others.map((item) => {
            return (
              <ItemCard
                name={item.name}
                description={item.description}
                price={item.price}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ColdDrinksMenu;
