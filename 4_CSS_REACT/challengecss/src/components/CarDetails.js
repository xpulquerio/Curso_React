import styles from "./CarDetails.module.css";

const CarDetails = ({nome, marca, preco}) => {
  return (
    <div>
        <ul className={styles.my_ul}>
            <li className={styles.text_title}>{nome}</li>
            <li>{marca}</li>
            <li>{preco}</li>
        </ul>

    </div>
  )
}

export default CarDetails