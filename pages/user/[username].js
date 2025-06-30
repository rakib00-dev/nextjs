import { useRouter } from 'next/router';
export default () => {
  const { query } = useRouter();
  return <h1>This is a {query.username} page</h1>;
};
