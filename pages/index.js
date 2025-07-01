import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Image
        src={'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg'}
        width={1000}
        height={400}
      />
    </div>
  );
}
