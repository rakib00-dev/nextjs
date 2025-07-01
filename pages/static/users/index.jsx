const UsersPage = (props) => {
  return (
    <>
      <h1>users (SSG)</h1>
      {props.users.map((e) => (
        <li key={e.id}>{e.firstName}</li>
      ))}
    </>
  );
};

export const getStaticProps = async () => {
  const data = await (await fetch('https://dummyjson.com/users')).json();

  return {
    props: data,
  };
};

export default UsersPage;
