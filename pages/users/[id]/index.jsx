import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default () => {
  const [user, setUser] = useState();
  const router = useRouter();

  useEffect(() => {
    async function fetchingData(id) {
      const data = await fetch(`https://dummyjson.com/users/${id}`);
      setUser(await data.json());
    }
    fetchingData(router.query.id);
  }, [router, user]);

  return (
    <>
      <h1>first name: {user?.firstName} </h1>
      <h1>last name: {user?.lastName} </h1>
      <h1>email: {user?.email} </h1>
    </>
  );
};
