import { Link } from "react-router-dom";
import "./navbar.scss";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext";
const Navbar = () => {
  const [open, setOpen] = useState(false);
const {currentUser} = useContext(AuthContext)
  return (
    <nav>
      <div className="left">
        <a href="" className="logo">
          <img src="/logo.png" alt="" />
          <span>RealEstate</span>
        </a>
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Contact</a>
        <a href="">Agents</a>
      </div>
      <div className="right">
        {currentUser ? (
          <div className="user">
            <img src={currentUser.avatar || '/noavatar.jpg'} alt="" />
            <span>{currentUser.username}</span>
            <Link className='profile' to ='/profile'>
            <div className="notification">3</div>
            <span>Profile</span>
             </Link>
          </div>
        ) : (
          <div className="registerWrapper">
            <a href="/login">Sign In</a>
            <a href="/register" className="register">
              Sign Up
            </a>
          </div>
        )}

        <div className="menuIcon">
          <img
            src="/menu.png"
            alt=""
            onClick={() => setOpen((prev) => !prev)}
          />
        </div>
        <div className={open ? "menu active" : "menu"}>
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Contact</a>
          <a href="">Agents</a>
          <a href="">Sign in</a>
          <a href="">Sign Up</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
