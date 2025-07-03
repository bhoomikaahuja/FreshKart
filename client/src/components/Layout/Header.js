import { useNavigate } from "react-router-dom";
import mealsImg from "../../assets/meals.jpg"
import appLogo from "../../assets/logoapp.jpg";
import classes from "./Header.module.css"
import HeaderCartButton from "./HeaderCartButton";
import { useEffect, useState } from "react";
const Header = (props) => {
    const [user, setUser] = useState("");
    const navigate = useNavigate();
    useEffect(() => {
        let userData = localStorage.getItem("userName");
        if (userData) {
            setUser(userData);
        }
    }, [])
    return (
        <>
            <header className={classes.header}>
                <h1>FreshKart</h1>
                <HeaderCartButton onClick={props.onShowCart} />
                {!user && <button onClick={() => navigate("/homePage")}>Login</button>}
                {user && <button onClick={() => { localStorage.removeItem("userName"); window.location.reload(false) }}>Log Out</button>}
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImg} alt="this is an image" />
            </div>
        </>
    );
}

export default Header;