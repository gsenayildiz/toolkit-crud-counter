import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { toggleTheme } from "../redux/slices/counterSlice";


const Header = () => {
    const dispatch = useDispatch();
  const { isDarkTheme} =  useSelector((store) => store.counterReducer);
  console.log(isDarkTheme)
  return (
    <header className="p-4">
     <div className="container d-flex justify-content-between align-items-center">
        <Link className="fs-1 text-decoration-none text-warning">
           TOOLKİT
        </Link>

        <nav className="d-flex align-items-center gap-3">
            <NavLink className={`btn ${isDarkTheme ? "text-white" : "text-dark"}`} to={"/"}>
            SAYAÇ
            </NavLink>
            <NavLink className={`btn ${isDarkTheme ? "text-white" : "text-dark"}`} to={"/crud"}>
            CRUD
            </NavLink>
            <button onClick={() => dispatch(toggleTheme())} className="btn btn-warning text-nowrap">Tema Değiş</button>
        </nav>
     </div>
    </header>
  )
}

export default Header;
