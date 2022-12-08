import { Outlet } from 'react-router-dom';

const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 500,
    fontSize: 30,
    textAlign: 'center',
  },
};

export default function Home() {
  return (
    <main>
      <div style={styles.container}>
        <h1 style={styles.title}>Hello, this is your PhoneBook.</h1>
        <h2 style={styles.title}>
          It is designed to help your brain not remember numbers,
          <br /> but write them down.
        </h2>
        <h2 style={styles.title}>
          Create your own unique account <br /> and get the opportunity to
          record your contacts.
          <span role="img" aria-label="Greeting icon">
            💁‍♀️
          </span>
        </h2>
        <Outlet></Outlet>
      </div>
    </main>
  );
}
