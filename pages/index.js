import { useSession, signIn, signOut } from 'next-auth/react';
import styles from '../styles/Home.module.css';

export default function Home() {
  const session = useSession();
  console.log(session);

  if (session.data === null) {
    return <button onClick={() => signIn()}>Login</button>;
  }

  return (
    <div className={styles.container}>
      <h1>Auth</h1>
      <button onClick={signOut}>Log out</button>
    </div>
  );
}
