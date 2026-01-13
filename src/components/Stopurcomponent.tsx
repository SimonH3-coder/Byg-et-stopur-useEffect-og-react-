import { useState, useEffect } from "react";
import styles from "./stopurcomponents.module.scss";

export function Stopurcomponent() {
  const [tid, setTid] = useState(0); // tiden i sekunder
  const [iskoerrende, setIskoerrende] = useState(false);

  useEffect(() => {
    let intervalId: number;

    if (iskoerrende) {
      intervalId = setInterval(() => {
        setTid((prevTid) => prevTid + 1);
      }, 1000);
    }
    // Ryd op i intervallet, når komponenten laves om  eller iskørrende ændres
    return () => clearInterval(intervalId);
  }, [iskoerrende]);

  const handleReset = () => {
    setIskoerrende(false);
    setTid(0);
  };

  return (
    <div className={styles.container}>
      <h1>Stopur</h1>
      <h2>{tid} sekunder</h2>
      <div>
        <button onClick={() => setIskoerrende(true)}>Start</button>
        <button onClick={() => setIskoerrende(false)}>Stop</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}
