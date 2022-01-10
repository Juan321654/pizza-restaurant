import styles from "../styles/PizzaList.module.css";
import PizzaCard from "./PizzaCard";

function PizzaList() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>The best pizza in town</h1>
      <p className={styles.desc}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis
        tenetur laborum, quaerat numquam esse soluta officia molestias quasi
        totam, ipsum exercitationem dolor 
      </p>
      <div className={styles.wrapper}>
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
      </div>
    </div>
  );
}

export default PizzaList;
