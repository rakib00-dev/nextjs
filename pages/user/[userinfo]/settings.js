import { useRouter } from 'next/router';

const Settings = () => {
  const router = useRouter();
  console.log(router);
  return (
    <div>
      <h1>this is a settings page for {router.query.userinfo}</h1>
    </div>
  );
};

export default Settings;
