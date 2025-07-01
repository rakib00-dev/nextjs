const users = (props) => {
  console.log(props);
  return (
    <>
      <h1>users (SSR)</h1>
      {props.users.map((e) => (
        <li key={e.id}>{e.firstName}</li>
      ))}
    </>
  );
};

export const getServerSideProps = async () => {
  const data = await fetch('https://dummyjson.com/users').then((res) =>
    res.json()
  );

  return {
    props: data,
  };
};

export default users;
