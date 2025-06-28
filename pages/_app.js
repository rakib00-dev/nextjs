import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <a href="/about">about</a>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
