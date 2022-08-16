import styles from "./card.module.css";
import Image from "next/image";
import { AsaItem } from "../../types";

export default function Card({ name, logo, available }: AsaItem) {
  return (
    <div className={styles.card}>
      <a className={styles.logo}>
        <Image
          src={logo || "/asset/bitcoin-ic.svg"}
          alt="bit Logo"
          width={62.94}
          height={30}
        />
      </a>
      <h2>{name}</h2>
      {available ? (
        <button className={styles.button}>Available</button>
      ) : (
        <button className={styles.but}>Unavailable</button>
      )}
    </div>
  );
}
