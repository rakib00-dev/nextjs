import Link from 'next/link';
import { fetcher } from './[id]';
import useSWR from 'swr';
import styles from '../../styles/User.module.css';

const PagesUser = () => {
  const { data: user, error } = useSWR('https://dummyjson.com/users', fetcher);

  return (
    <>
      <h1>Users</h1>
      {user?.users.map((e) => (
        <Link href={`/users/${e.id}`} key={e.id}>
          <div className={styles['text-color']}> {e.firstName}</div>
        </Link>
      ))}
    </>
  );
};

export default PagesUser;
