import { useEffect, useState } from 'react';
import Link from 'next/link';

export default () => {
  const [user, setUser] = useState();

  useEffect(() => {
    async function fetchingUsers() {
      const data = await fetch('https://dummyjson.com/users');
      setUser(await data.json());
    }
    fetchingUsers();
  }, []);

  return (
    <>
      <h1>Users</h1>
      {user?.users.map((e) => (
        <Link href={`/users/${e.id}`} key={e.id}>
          <div>{e.firstName}</div>
        </Link>
      ))}
    </>
  );
};
