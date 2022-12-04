import ItemCard from "../../UI/MenuItems/ItemCard";
import styles from "../MenuLayout.module.css";

const FoodMenu = () => {
  const food = {
    paninis: [
      {
        name: "Chicken",
        description:
          "Spinach, Cheese, Roast Chicken, Bacon, Avocado & Tomato Chutney.",
        price: "$11",
      },
      {
        name: "Vegetarian",
        description:
          "Spinach, Fetta, Pesto, Chargrilled Vegetables & Chipotle Mayonnaise.",
        price: "$11",
      },
    ],

    wraps: [
      {
        name: "Peri Peri Chicken",
        description:
          "Spinach, Shredded Cheese, Peri Peri Chicken, Tomato, Cucumber & Peri Peri Mayonnaise.",
        price: "$11.50",
      },
      {
        name: "Ham",
        description:
          "Spinach, Shredded Cheese, Ham, Tomato, Cucumber & Mayonnaise.",
        price: "$11",
      },
      {
        name: "Vegetarian",
        description:
          "Spinach, Shredded Cheese, Chargrilled Vegetables, Tomato, Cucumber & Hummus.",
        price: "$11",
      },
    ],

    quesadillas: [
      {
        name: "Breakfast Special",
        description: "Spinach, Cheese, Scrambled Eggs, Bacon & BBQ Sauce.",
        price: "$14",
      },
      {
        name: "Salami",
        description: "Spinach, Cheese, Salami, Tomato & Aioli.",
        price: "$14",
      },
      {
        name: "Chicken",
        description:
          "Spinach, Cheese, Roast Chicken, Sun-Dried Tomato & Mayonnaise.",
        price: "$14",
      },
      {
        name: "Mushroom",
        description:
          "Spinach, Cheese, Mushrooms, Roast Capsicum & Chipotle Mayonnaise.",
        price: "$14",
      },
    ],

    avocado: [
      {
        name: "Smashed Avocado",
        description:
          "Seasoned Avocado & Feta On Two Slices Of Grilled Sourdough.",
        price: "$9.90",
      },
    ],
    sandwhiches: [
      {
        name: "Build Your Own Sandwich (Toasted/Fresh)",
        description:
          "(Ham, Chicken, Salami & Tuna $1 Extra)(Carrot, Beetroot, Tomato, Cucumber, Cheese, Spinach, Mushroom, Red Onion, Avocado 50c Extra) (Gluten Free Bread/Wraps Available & Vegan Cheese $1 Extra)",
        price: "Starts at $5.50",
      },
    ],
    raisinToast: [
      {
        name: "Raisin Toast",
        description:
          "Thickly Sliced Raisin Toast With Lashings Of Butter. Add Sliced Banana & Cinnamon & Sugar for $1.",
        price: "$2.50/Slice",
      },
    ],

    bowls: [
      {
        name: "Quiche & Salad",
        description:
          "Corn Chips, Black Beans, Salsa, Cheese, Avocado & Sour Cream. Gluten Free Corn Chips Available for $2 Extra.",
        price: "$12.50",
      },
      {
        name: "Nachos",
        description:
          "Corn Chips, Black Beans, Salsa, Cheese, Avocado & Sour Cream. Gluten Free Corn Chips Available for $2 Extra.",
        price: "$12.50",
      },
    ],
  };

  return (
    <div className={styles.container}>
      <div className={styles.type}>
        <h2>Paninis</h2>
        <div className={styles["menu-food"]}>
          {food.paninis.map((item) => {
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
        <h2>Wraps</h2>
        <div className={styles["menu-food"]}>
          {food.wraps.map((item) => {
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
        <h2>Quesadillas</h2>
        <div className={styles["menu-food"]}>
          {food.quesadillas.map((item) => {
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
        <h2>Our Favourite</h2>
        <div className={styles["menu-food"]}>
          {food.avocado.map((item) => {
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
        <h2>Sandwhiches</h2>
        <div className={styles["menu-food"]}>
          {food.sandwhiches.map((item) => {
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
        <h2>Raisin Toast</h2>
        <div className={styles["menu-food"]}>
          {food.raisinToast.map((item) => {
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
        <h2>Bowls</h2>
        <div className={styles["menu-food"]}>
          {food.bowls.map((item) => {
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

export default FoodMenu;
