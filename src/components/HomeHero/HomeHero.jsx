import styles from "./HomeHero.module.css";

const HomeHero = () => {
  return (
    <div className={styles.homeHero}>
      <h1>Welcome to Phonebook</h1>
      <h2>Easily manage your contacts and stay in touch.</h2>
      <p className={styles.about}>
        Phonebook is your go-to app for organizing and managing contacts. Keep
        your contacts secure, easily accessible, and always up-to-date.
      </p>
    </div>
  );
};

export default HomeHero;
