import { Outlet } from 'react-router-dom';

const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
};

export default function Home() {
  return (
    <>
      <div style={styles.container}>
        <h1>
          Welcome
          <span role="img" aria-label="Greeting icon">
            👋
          </span>
        </h1>

        <h2>
          Now you will exactly not forget your contacts!
          <span role="img" aria-label="Greeting icon">
            💁‍♀️
          </span>
        </h2>
        <Outlet></Outlet>
      </div>
    </>
  );
}