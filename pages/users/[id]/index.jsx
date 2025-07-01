import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import useSWR from 'swr';

export const fetcher = (...args) => {
  return fetch(...args).then((r) => r.json());
};

const Users = () => {
  const router = useRouter();
  const [id, setId] = useState(0);

  useEffect(() => {
    setId(router.query.id);
  }, [router]);

  const { data: user, error } = useSWR(
    `https://dummyjson.com/users/${id}`,
    fetcher
  );

  console.log(id);

  return (
    <>
      <h1>first name: {user?.firstName} </h1>
      <h1>last name: {user?.lastName} </h1>
      <h1>email: {user?.email} </h1>
    </>
  );
};

export default Users;
