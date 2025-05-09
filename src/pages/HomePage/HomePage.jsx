import HomeHero from "../../components/HomeHero/HomeHero";
import ContactsPage from "../ContactsPage/ContactsPage";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
const HomePage = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <>
    {isLoggedIn ? <ContactsPage /> : <HomeHero />}
    </>
  );
}
export default HomePage;