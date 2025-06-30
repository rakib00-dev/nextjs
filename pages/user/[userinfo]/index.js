import { useRouter } from 'next/router';
import { useEffect } from 'react';

const useUser = () => ({ user: null, loading: false });

export default () => {
  const router = useRouter();
  const user = useUser();
  useEffect(() => {
    if (user.user !== null) {
      router.replace('/');
    }
  }, [router, user.user]);
  return (
    <>
      <h1>This is user {router.query.userinfo} index page</h1>;
      <button
        // onClick={() => router.push(`/user/${router.query.userinfo}/settings`)}
        onClick={() =>
          router.push({
            pathname: 'user/[userinfo]/settings',
            query: { userinfo: router.query.userinfo },
          })
        }
      >
        Open user settings
      </button>
      <button onClick={() => router.replace('/')}>Go to home</button>
      <button onClick={() => router.reload()}>relaod</button>
    </>
  );
};
