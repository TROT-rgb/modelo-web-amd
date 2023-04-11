import React, { useContext, useEffect, useState } from "react";
import "./index.css";
import { Link } from "react-router-dom";
import {
  facebook,
  instagram,
  twitter,
  playstore,
  user as us,
  LogoAMD,
  youtube,
  twitch,
  discord,
} from "../../Provider";
import { UserContext } from "../../Context/UserContext";

export default function Header() {
  const [user] = useContext(UserContext);
  const [visible, setVisible] = useState(false);
  let username = user.username;
  if (username.length > 9) {
    username = username.substring(0, 9);
    username = username + "...";
  }

  const handleChange = () => {
    setVisible(!visible);
  };

  useEffect(() => {
    if (window.matchMedia("(max-width: 620px)").matches) {
      setVisible(false);
    } else setVisible(true);
    console.log(user.admin);
  }, [user]);

  return (
    <div className="header-trans">
      <div className="header-top-area">
        <div className="header-social">
          <ul className="lay-media align-center">
            <li className="ml-6 mr-6">
              <a href="https://www.facebook.com/AMDRedLeague" target="__blank">
                <img className="media-icons" alt="media" src={facebook}></img>
              </a>
            </li>
            <li className="ml-8 mr-8">
              <a
                href="https://www.instagram.com/amdredleague/"
                target="__blank"
              >
                <img className="media-icons" alt="media" src={instagram}></img>
              </a>
            </li>
            <li className="ml-8 mr-8">
              <a href="https://twitter.com/AMD_RedLeague" target="__blank">
                <img className="media-icons" alt="media" src={twitter}></img>
              </a>
            </li>
            <li className="ml-8 mr-8">
              <a
                href="https://www.youtube.com/channel/UCCq3XO8cOv34Au62Qtdawvw"
                target="__blank"
              >
                <img className="media-icons" alt="media" src={youtube}></img>
              </a>
            </li>
            <li className="ml-8 mr-5">
              <a href="https://www.twitch.tv/amd_latam" target="__blank">
                <img className="media-icons" alt="media" src={twitch}></img>
              </a>
            </li>
            <li className="ml-8" style={{ display: "none" }}>
              <Link to="/ApkDownload">
                <img className="media-icons" alt="media" src={playstore}></img>
              </Link>
            </li>
            <li className="ml-10">
              <a href="https://discord.gg/dCvwUkt" target="__blank">
                <img className="media-icons" alt="media" src={discord}></img>
              </a>
            </li>
          </ul>
        </div>

        <ul className="d-flex align-center">
          <li className="d-flex align-center mr-5">
            <span className="" style={{ color: "#CD001A" }}>
              |
            </span>
          </li>
          <li className="d-flex ml-10 align-center">
            {user.isLoggedIn ? (
              <Link to="/Profile" className="li-link d-flex">
                <div className="user-logic-lay">
                  {user.profilePhotoUrl === "default" ? (
                    <img src={us} alt="profilePhoto" />
                  ) : (
                    <img
                      style={{ width: 36, height: 36, padding: 2 }}
                      src={user.profilePhotoUrl}
                      alt="profilePhoto"
                    />
                  )}
                </div>
                <div className="black-cuadrado">
                  <span>{username}</span>
                </div>
              </Link>
            ) : (
              <Link to="/LoginScreen" className="li-link d-flex">
                <div className="user-logic-lay">
                  {" "}
                  <img alt="media" src={us}></img>
                </div>
                <div className="black-cuadrado">
                  <span>LOGIN</span>
                </div>
              </Link>
            )}
          </li>
        </ul>
      </div>
      <div className="separator-line" />
      <div className="header-bottom-area">
        <Link to="/" className="li-link">
          <div className="logo">
            <img className="logo-img" src={LogoAMD} alt="Logo"></img>
          </div>
        </Link>
        <Link to="/" className="li-link-res">
          <img className="logo-img" src={LogoAMD} alt="Logo"></img>
        </Link>
        <div id="mobile-menu" className="navbar-wrap d-none">
          <button onClick={handleChange} className="menu-icon">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </button>
          <ul style={{ top: visible ? "100%" : "-500%" }}>
            <li style={{ width: 9 }}></li>
            <li className="">
              <Link to="/" className="li-link">
                HOME
              </Link>
            </li>
            <li className="cursor-pointer">
              <p>NOTICIAS</p>
              <ul className="submenu">
                <li>
                  <Link to="/NewsAMD" className="li-link">
                    NOTICIAS amd
                  </Link>
                </li>
                <li>
                  <Link to="/AdviceAMD" className="li-link">
                    Consejos amd
                  </Link>
                </li>
                {user.isLoggedIn ? (
                  <li>
                    <Link Link to="/NewsCommunity" className="li-link">
                      noticias community
                    </Link>
                  </li>
                ) : null}
                {user.admin ? (
                  <li>
                    <Link to="/Admin">añadir noticias</Link>
                  </li>
                ) : null}
              </ul>
            </li>
            <li className="cursor-pointer">
              <p>Competencias</p>
              <ul className="submenu">
                <li>
                  <Link to="/CompCsgo" className="li-link">
                    CS:GO
                  </Link>
                </li>
                <li>
                  <Link to="/CompValorant" className="li-link">
                    VALORANT
                  </Link>
                </li>
                <li>
                  <Link to="/CompCod" className="li-link">
                    CALL OF DUTY
                  </Link>
                </li>
                <li>
                  <Link to="/CompFortnite" className="li-link">
                    FORTNITE
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/Streaming" className="li-link">
                Streaming
              </Link>
            </li>
            <li>
              <Link to="/ApkDownload" className="li-link">
                App AMD
              </Link>
            </li>
            <li>
              <Link to="/universitychallenge" className="li-link">
                AMDUC
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
