import styles from "./page.module.css";

import dynamic from "next/dynamic";

const Test = dynamic(() => import('@/component/Test.jsx'),{ ssr: false }) 

export default function Home() {
  return (
    <main className={styles.main}>
      <Test />
    </main>
  );
}
