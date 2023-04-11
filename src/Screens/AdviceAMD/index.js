import './index.css';
import React, { useContext } from "react";

import Header from "../../Components/Modules/Header";
import Footer from "../../Components/Modules/Footer";

import { UserContext } from "../../Components/Context/UserContext";
import { Redirect } from "react-router-dom";

import { logo, Masterrace, Reqmin, streamer } from '../../Components/Provider';

export default function AdviceAMD() {
  const [user] = useContext(UserContext);
    if (user.isLoggedIn !== null) {
    return (
        <div className="o-hidden">
        {user.isLoggedIn === null ? <Redirect to="/Home" /> : null}
            <Header />
            <div className="overlay-news d-flex flex-column">
                <div className="cube-desing-wide1">
                    <div className="advices-lay d-flex flex-column">
                        <img style={{ width: 200, display: 'flex', alignSelf: 'center' }} src={logo} alt="consejo-img" />
                        <div className="advices-lay d-flex flex-column">

                            <div className=" computer-case d-flex flex-column">
                                <li><p> PC Streamer</p>
                                    <ul>
                                        <li><p>LOW</p>
                                            <ul><p> AMD Ryzen 5 3600 3.6 GHz 6-Core Processor</p></ul>
                                            <ul><p> MSI B450M PRO-VDH MAX</p></ul>
                                            <ul><p>16 GB (2 x 8 GB) DDR4-3600</p></ul>
                                            <ul><p>512GB M2 SSD</p></ul>
                                            <ul><p>AMD Radeon™ RX 5700 XT Graphics</p></ul>
                                        </li>
                                    </ul>
                                    <ul>
                                        <li><p>HIGH</p>
                                            <ul><p>AMD Ryzen 5 5600X 3.7 GHz 6-Core Processor</p></ul>
                                            <ul><p> Gigabyte B550 GAMING X V2</p></ul>
                                            <ul><p>16 GB (2 x 8 GB) DDR4-3600</p></ul>
                                            <ul><p>1TB M2 SSD</p></ul>
                                            <ul><p> AMD Radeon™ RX 6800</p></ul>
                                        </li>
                                    </ul>
                                </li>
                                <div className="advice-pcs d-flex">
                                    <img src={streamer} alt="pcs" />
                                </div>
                            </div>

                            <div className="computer-case d-flex flex-column">

                                <li><p> PC GAMER exigencia mínima</p>
                                    <ul>
                                        <li><p>LOW</p>
                                            <ul><p>AMD Ryzen 5 2600 3.4 GHz 6-Core Processor</p></ul>
                                            <ul><p>Gigabyte B450M DS3H V2</p></ul>
                                            <ul><p>16 GB (2 x 8 GB) DDR4-3200</p></ul>
                                            <ul><p>480 GB SSD</p></ul>
                                            <ul><p>AMD Radeon™ RX 5600</p></ul>
                                        </li>
                                    </ul>

                                    <ul>
                                        <li><p>HIGH</p>
                                            <ul><p>AMD Ryzen 5 3600 3.6 GHz 6-Core Processor</p></ul>
                                            <ul><p>Gigabyte B550M DS3H</p></ul>
                                            <ul><p>16 GB (2 x 8 GB) DDR4-3600</p></ul>
                                            <ul><p>1TB SSD</p></ul>
                                            <ul><p>AMD Radeon™ RX 6700 XT Graphics</p></ul>
                                        </li>
                                    </ul>

                                </li>
                                <div className="advice-pcs d-flex">
                                    <img src={Reqmin} alt="pcs" />
                                </div>
                            </div>

                            <div className="computer-case d-flex flex-column">
                                <li><p> PC GAMER MASTER RACE</p>
                                    <ul>
                                        <li><p>LOW</p>
                                            <ul><p>AMD Ryzen 5 5600X 3.7 GHz 6-Core Processor</p></ul>
                                            <ul><p>ASRock B550M-ITX</p></ul>
                                            <ul><p>16 GB (2 x 8 GB) DDR4-3200</p></ul>
                                            <ul><p>1TB SSD</p></ul>
                                            <ul><p>AMD Radeon™ RX 6700 XT</p></ul>
                                        </li>
                                    </ul>

                                    <ul>
                                        <li><p>HIGH</p>
                                            <ul><p>AMD Ryzen 9 5900X 3.7 GHz 12-Core Processor</p></ul>
                                            <ul><p>Asus TUF GAMING X570-PLUS</p></ul>
                                            <ul><p>32 GB (2 x 16 GB) DDR4 3600</p></ul>
                                            <ul><p>1 TB M2 SSD</p></ul>
                                            <ul><p>AMD Radeon™ RX 6900 XT</p></ul>
                                        </li>
                                    </ul>

                                </li>
                                <div className="advice-pcs d-flex">
                                    <img src={Masterrace} alt="pcs" />
                                </div>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
} else return <Redirect to="/Home" />;
}