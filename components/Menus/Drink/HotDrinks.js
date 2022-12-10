import ItemCard from "../../UI/MenuItems/ItemCard";
import styles from "../MenuLayout.module.css";

const HotDrinksMenu = () => {
  const hotDrinks = {
    coffee: [
      {
        name: "Flat White",
        price: "$4.60 / $5.00 / $5.60",
      },
      {
        name: "Cuppucino,",
        price: "$4.60 / $5.00 / $5.60",
      },
      {
        name: "Latte",
        price: "$4.60 / $5.00 / $5.60",
      },
      {
        name: "Mocha",
        price: "$5.00 / $5.60 / $6.00",
      },
      {
        name: "Long Black",
        price: "$4.60 / $5.00 / $5.60",
      },
      {
        name: "Piccolo",
        price: "$3.90 / $4.20",
      },
      {
        name: "Espresso",
        price: "$3.20 / $4.20",
      },
      {
        name: "Chai Latte",
        price: "$4.30 / $4.60 / $5.10",
      },
      {
        name: "Matcha Latte",
        price: "$4.60 / $5.00 / $5.60",
      },

      {
        name: "Sticky Chai",
        price: "$4.60 / $5.00 / $5.60",
      },
      {
        name: "Dirty Chai",
        price: "$5.00 / $5.60 / $6.00",
      },

      {
        name: "Babycino",
        price: "$1.00",
      },
    ],
    tea: [
      {
        name: "Flat White",
        price: "$3.00 / $3.50 / $4.00",
      },
      {
        name: "Cuppucino,",
        price: "$3.00 / $3.50 / $4.00",
      },
      {
        name: "Latte",
        price: "$3.00 / $3.50 / $4.00",
      },
      {
        name: "Long Black",
        price: "$3.00 / $3.50 / $4.00",
      },
      {
        name: "Piccolo",
        price: "$3.00 / $3.50 / $4.00",
      },
    ],
  };

  const merchandise = [
    {
      name: "Green Caffeine Mugs",
      description: "Green Caffeine Mugs Are Handmade",
      price: "$30",
    },
    {
      name: "Moka Bar Beans",
      description: "Small Bag / Large Bag",
      price: "$15 / $40",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.type}>
        <h2>Hot Drinks </h2>
        <div className={styles["menu-drinks"]}>
          {hotDrinks.coffee.map((item) => {
            return <ItemCard name={item.name} description={item.description} />;
          })}
        </div>
        <h2>Tea </h2>
        <div className={styles["menu-drinks"]}>
          {merchandise.map((item) => {
            return <ItemCard name={item.name} description={item.description} />;
          })}
        </div>
        <h2>Take Home </h2>
        <div className={styles["menu-drinks"]}>
          {merchandise.map((item) => {
            return <ItemCard name={item.name} description={item.description} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default HotDrinksMenu;
