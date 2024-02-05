import "bootstrap/dist/css/bootstrap.min.css";
import React, { useContext, useState } from "react";
import {
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import jsondatas from "../JSONDATA/Names";
import "./Header.css";
import { MyContext } from "./context";

export default function Home() {
  const { count, profilename, wishcount, setProfileName } =
    useContext(MyContext);
  const [pass, setPass] = useState();
  const [value, setValue] = useState("");

  const OnSearchs = (value) => {
    setValue(value);
    if (value) {
      setPass("/search");
    } else {
      alert("Please spicify data");
    }
  };
  const OnChanges = (e) => {
    setValue(e.target.value);
  };

  const logout = () => {
    if (profilename) {
      alert("Logged out Successfully");

      sessionStorage.clear();
      setProfileName("");
    } else {
      alert("Not Yet logged in to Logout");
    }
  };
  return (
    <div className="amain">
      <div className="row arow container-fluid">
        <div className="col aone">
          <Link to="/">
            <h3 className="mhead">
              TRENDY<span style={{ color: "pink" }}>.com</span>
            </h3>
          </Link>
        </div>
        <div className="col atwo">
          <div class="dropdown">
            <Link to="/infants" state={{ from: "infants" }}>
              <button class="dropbtn">Infants</button>
            </Link>
            <div class="dropdown-content">
              <Link
                to="/bodysuits"
                state={{ from: "bodysuits" }}
                className="ddtxt"
              >
                Body Suits
              </Link>
              <Link to="/dresses" state={{ from: "casual" }} className="ddtxt">
                Dresses
              </Link>
            </div>
          </div>

          <div class="dropdown">
            <Link to="/boys" state={{ from: "boys" }}>
              <button class="dropbtn">Boys</button>
            </Link>
            <div class="dropdown-content">
              <Link to="/tshirts" state={{ from: "tshirts" }} className="ddtxt">
                T-Shirts
              </Link>
              <Link to="/shirts" state={{ from: "shirts" }} className="ddtxt">
                Shirts
              </Link>
              <Link to="/pants" state={{ from: "pants" }} className="ddtxt">
                Pants
              </Link>
            </div>
          </div>

          <div class="dropdown">
            <Link to="/girls" state={{ from: "girls" }}>
              {" "}
              <button class="dropbtn">Girls</button>
            </Link>
            <div class="dropdown-content">
              <Link to="/frocks" state={{ from: "frocks" }} className="ddtxt">
                Frocks
              </Link>
              <Link to="/skirts" state={{ from: "skirts" }} className="ddtxt">
                Skirts
              </Link>
              <Link
                to="/jumpsuits"
                state={{ from: "jumpsuits" }}
                className="ddtxt"
              >
                Jumpsuits
              </Link>
            </div>
          </div>

          <div class="dropdown">
            <Link to="/men" state={{ from: "men" }}>
              <button class="dropbtn">Mens</button>
            </Link>
            <div class="dropdown-content">
              <Link to="/track" state={{ from: "track" }} className="ddtxt">
                Track Pants
              </Link>
              <Link to="/jeans" state={{ from: "jeans" }} className="ddtxt">
                Jeans
              </Link>
              <Link to="/tshirt" state={{ from: "tshirt" }} className="ddtxt">
                T-shirts
              </Link>
            </div>
          </div>

          <div class="dropdown">
            <Link to="/women" state={{ from: "women" }}>
              <button class="dropbtn drpwomen">Womens</button>
            </Link>
            <div class="dropdown-content">
              <Link to="/sarees" state={{ from: "sarees" }} className="ddtxt">
                Sarees
              </Link>
              <Link to="/kurtis" state={{ from: "kurtis" }} className="ddtxt">
                Kurtis
              </Link>
              <Link to="/tops" state={{ from: "tops" }} className="ddtxt">
                Tops
              </Link>
            </div>
          </div>
        </div>
        <div className="col athree">
          <div style={{ display: "flex" }}>
            <input
              type="text"
              style={{ position: "relative" }}
              placeholder="SEARCH HERE"
              value={value}
              onChange={OnChanges}
              className="searchhere"
            />
            <Link to={pass} state={{ from: value }}>
              <AiOutlineSearch
                style={{
                  cursor: "pointer",
                  position: "absolute",
                  width: 30,
                  height: 23,
                  marginTop: 4,
                  marginLeft: -35,
                }}
                onClick={() => OnSearchs(value)}
              ></AiOutlineSearch>
            </Link>
          </div>
          <div className="dropdown" style={{ position: "absolute", zIndex: 1 }}>
            {jsondatas
              .filter((item) => {
                const searchTerm = value.toLowerCase();
                const fullName = item.name.toLowerCase();

                return (
                  searchTerm &&
                  fullName.startsWith(searchTerm) &&
                  fullName !== searchTerm
                );
              })
              .map((item) => (
                <div
                  onClick={() => OnSearchs(item.name)}
                  className="dropdown-row"
                >
                  {item.name}
                </div>
              ))}
          </div>
        </div>

        <div className="col afour">
          <div class="dropdown">
            <button className="profilebtn">
              <AiOutlineUser className="profile" />
            </button>
            <div class="dropdown-content">
              <Link to="/Signup" className="ddtxt">
                SIGNUP
              </Link>
              <Link to="/Login" className="ddtxt">
                LOGIN
              </Link>
              <a onClick={logout} className="ddtxt">
                LOGOUT
              </a>
            </div>
          </div>
          <Link to="/wishlist">
            <AiOutlineHeart className="heart" />
          </Link>
          <sup className="wishcount">{wishcount}</sup>
          <Link to="/cart">
            <AiOutlineShoppingCart className="cart" />
          </Link>
          <sup className="count" style={{ marginRight: 10 }}>
            {count}
          </sup>
        </div>
      </div>
    </div>
  );
}
