import './index.css';
import Footer from '../../Components/Modules/Footer';
import Header from '../../Components/Modules/Header';
import { champs, compe_map_1, compe_map_2, compe_map_3, logoAMDUCnocolor } from '../../Components/Provider';
import { useContext, useRef } from 'react';
import { UserContext } from '../../Components/Context/UserContext';
import { Redirect } from 'react-router';
import SponsorSlider from '../../Components/Modules/SponsorSlider';
import Carousel from 'react-elastic-carousel';
import {
    fedup, feune, uai, uautonoma_color,
    udelima, uni, utec, ucatal, usil, fedecolde
} from '../../Components/Provider';
import { Link } from 'react-router-dom';
import {marcas, marcas_dos} from '../../Components/Modules/SponsorSlider/marcas';

function UniversityChallenge() {
    const [user] = useContext(UserContext);
    let resetTimeout;
    const itemsPerPage = 5;
    const items = [
        { img: uai }, { img: uautonoma_color }, { img: udelima },
        { img: uni }, { img: utec }, { img: ucatal }, { img: usil },
    ];
    const carouselRef = useRef(null);
    const totalPages = Math.ceil(items.length / itemsPerPage);
    const time = 4000;
    return (
        <div className="backg">
            {user.isLoggedIn === null ? <Redirect to="/universitychallenge/loading" /> : null}
            <Header />
            <div className="body">
                <div className="image_container">
                    <img alt="amd university challenge" src={logoAMDUCnocolor} className="image" />
                </div>
                <p>
                    University Challenge es la competencia de Counter Strike Global
                    Offensive para universitarios de AMD Red League powered by ISURUS
                </p>
                <a className="rule_button" href="https://drive.google.com/file/d/1mp_yRY-4It3p5pgXvJJsZHsqJ5Rbh2QI/view" target="_blank" rel="noreferrer">
                    Ver reglamento
                </a>                
                <div className="title-lay d-flex justify-center align-items-center w-100">
                    <div className="cube-desing">
                        <iframe
                            className="cube-video"
                            src="https://youtube.com/embed/1beoPYbkM74"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
                <div className="amd_cruces_container">
                    <h2>Campeones AMD UC</h2>
                    <div className="comp_img_container">
                        <img src={champs} alt="cruce amdrl" />
                    </div>
                </div>
                <SponsorSlider marcas={marcas}/>
                <SponsorSlider marcas={marcas_dos}/>
                <h2 style={{ fontSize: 40 }}>Universidades que #JueganFuerte</h2>
                <Carousel
                    pagination={false}
                    showArrows={false}
                    ref={carouselRef}
                    enableAutoPlay={true}
                    autoPlaySpeed={time} // same time
                    onNextEnd={({ index }) => {
                        if (index + 1 === totalPages) {
                            clearTimeout(resetTimeout);
                            resetTimeout = setTimeout(() => {
                                carouselRef.current.goTo(0);
                            }, time + 1000); // same time
                        }
                    }}
                    itemsToShow={itemsPerPage}>
                    {items.map((val, index) => {
                        return (
                            <div className="card-img" key={index}>
                                <img src={val.img} alt={val.img} />
                            </div>
                        );
                    })}
                </Carousel>
                <h2 style={{ fontSize: 40 }}>PARTNERS</h2>
                <div className="partners_container" style={{marginBottom: 20}}>
                    <div className="partners_img_container">
                        <img src={fedup} alt="fedup" />
                    </div>
                    <div className="partners_img_container">
                        <img src={feune} alt="feune" />
                    </div>
                    <div className="partners_img_container">
                        <img src={fedecolde} alt="fedecolde" />
                    </div>
                </div>
                <Link className="link_button"
                    to="/">
                    Dónde comprar
                </Link>
            </div>
            <Footer />
        </div>
    );
}

export default UniversityChallenge;
