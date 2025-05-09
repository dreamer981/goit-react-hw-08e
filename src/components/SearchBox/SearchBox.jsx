import { useSelector, useDispatch } from "react-redux";
import style from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filters/slice";
import { selectNameFilter } from "../../redux/filters/selectors";

const SearchBox = () => {
  const searchTerm = useSelector(selectNameFilter);
  const dispatch = useDispatch();
  const handleChange = (event) => dispatch(changeFilter(event.target.value));

  return (
    <div className={style.searchBox}>
      <label>Find contacts by name</label>
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        className={style.searchInput}
      />
    </div>
  );
};

export default SearchBox;
