const StaticUsersInfo = (props) => {
  console.log(props);
  return (
    <>
      <h1>first name: {props?.firstName} </h1>
      <h1>last name: {props?.lastName} </h1>
      <h1>email: {props?.email} </h1>
    </>
  );
};

export const getStaticPaths = async () => {
  const data = await (await fetch(`https://dummyjson.com/users/`)).json();
  console.log(data);
  const allUserIds = data.users.map((user) => user.id);
  console.log(allUserIds);

  return {
    paths: allUserIds.map((user) => ({
      params: {
        id: `${user}`,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await (await fetch(`https://dummyjson.com/users/${id}`)).json();
  return {
    props: data,
  };
};

export default StaticUsersInfo;
