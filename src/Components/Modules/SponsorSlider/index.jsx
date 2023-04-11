import './index.css';

function SponsorSlider({marcas}) {
    return (
        <div className="slider">
            <div className="slide-track">
            {
                    marcas.map((val, index) => {
                        return (
                            <div className="slide" key={index}>
                                <a href={val.link} target="_blank" rel="noreferrer" className="box">
                                    <img src={val.src} alt={val.name} className={val.invert ? "invert" : ""} />
                                </a>
                            </div>               
                        );
                    })
                }
            </div>
        </div>
    );
}

export default SponsorSlider;