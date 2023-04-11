import "./index.css";
import React, { useState } from "react";
import {
    facebookfon as facebook,
    instagram,
    globo
} from "../../Provider";

export default function Resellers() {

    const itemsArgen = [
        {
            name: "COMPRA GAMER",
            facebook: 'https://www.facebook.com/compragamer/',
            instagram: 'https://www.instagram.com/compragamer_oficial/',
            web: 'https://compragamer.com/'
        }, {
            name: "MEXX",
            facebook: 'https://www.facebook.com/MEXXCOMPUTACION',
            instagram: 'https://www.instagram.com/mexx.computacion/',
            web: 'https://www.mexx.com.ar/'
        }, {
            name: "DIAMOND",
            facebook: 'https://www.facebook.com/ComputacionDSystem',
            instagram: 'https://www.instagram.com/computaciondsystem/',
            web: 'https://www.diamondcomputacion.com.ar/'
        },
        {
            name: "FullH4rd",
            facebook: 'https://www.facebook.com/fullh4rd',
            instagram: 'https://www.instagram.com/fullh4rd/',
            web: 'https://www.fullh4rd.com.ar/'
        },
        {
            name: "Maximus",
            facebook: 'https://www.facebook.com/Maximus.Gaming.Argentina',
            instagram: 'https://www.instagram.com/maximus_gaming_hardware/',
            web: 'https://www.maximus.com.ar/'
        },
        {
            name: "Gezatek",
            facebook: 'https://www.facebook.com/gezatek',
            instagram: 'https://www.instagram.com/gezatek/',
            web: 'https://www.gezatek.com.ar/'
        },
        {
            name: "Integrados Arg",
            instagram: 'https://www.instagram.com/integradosargentinos/',
            facebook: 'https://www.facebook.com/integrados.argentinos',
            web: 'https://integradosargentinos.com/',
        },
        {
            name: "Lezama PC",
            instagram: 'https://www.instagram.com/lezamapc/',
            facebook: 'https://www.facebook.com/Lezamapc/',
            web: 'https://lezamapc.com.ar/',
        },
        {
            name: "HardCore Computación",
            instagram: 'https://www.instagram.com/hardcorecomputacion/',
            facebook: 'https://www.facebook.com/hardcorecomputacion/',
            web: 'https://hardcorecomputacion.com.ar/',
        },
        {
            name: "Armytech",
            instagram: 'https://www.instagram.com/armytech_hardware/',
            facebook: 'https://www.facebook.com/armytechhard',
            web: 'https://www.armytech.com.ar/',
        },
        {
            name: "Compugarden",
            instagram: 'https://www.instagram.com/compugarden/',
            facebook: 'https://www.facebook.com/compugarden',
            web: 'http://www.compugarden.com.ar/',
        },
        {
            name: "Venex",
            instagram: 'https://www.instagram.com/venex.com.ar/',
            facebook: 'https://www.facebook.com/venex.com.ar',
            web: 'https://www.venex.com.ar/',
        },
        {
            name: "Logg Hardstore",
            instagram: 'https://www.instagram.com/logghardstore/',
            facebook: 'https://www.facebook.com/logghardstore',
            web: 'https://www.logg.com.ar/',
        },
        {
            name: "Mundo Fix",
            instagram: 'https://www.instagram.com/mundofixok/',
            facebook: 'https://www.facebook.com/mundofix',
            web: 'https://mundofix.com/',
        },
        {
            name: "Gaming City",
            instagram: 'https://www.instagram.com/gamingcitycomputacion/',
            facebook: 'https://www.facebook.com/gamingcitycomputacion',
            web: 'https://www.gamingcity.com.ar/',
        },
        {
            name: "BidCom",
            instagram: 'https://www.instagram.com/bidcomok/',
            facebook: 'https://www.facebook.com/bidcom',
            web: 'https://www.bidcom.com.ar/',
        }
    ]

    const itemsBoliv = [
        {
            name: "Magic Technology",
            facebook: 'https://www.facebook.com/MagicTechnology/',
            web: 'https://magictechnology.com.bo/'
        }, {
            name: "Distribuidora Vanesa"
        }
    ]

    const itemsChile = [
        {
            name: "SP Digital",
            instagram: 'https://www.instagram.com/spdigital_chile/',
            facebook: 'https://www.facebook.com/SPDigitalChile',
            web: 'https://www.spdigital.cl/'
        },
        {
            name: "Web Century",
            instagram: 'https://www.instagram.com/alltecomputacion/',
            facebook: 'https://www.facebook.com/alltecomputacionchile',
            web: 'http://allte.cl/'
        },
        {
            name: "Ingram Micro",
            instagram: 'https://www.instagram.com/ingrammicrocl/',
            facebook: 'https://www.facebook.com/IngramMicroCl',
            web: 'https://cl.ingrammicro.com/'
        },
        {
            name: "PC Factory",
            instagram: 'https://www.instagram.com/pcfactorycl/',
            facebook: 'https://www.facebook.com/PCFactoryCL',
            web: 'https://www.pcfactory.cl/'
        },
        {
            name: "Tecnoglobal",
            instagram: 'https://www.instagram.com/tecnoglobalchile/',
            facebook: 'https://www.facebook.com/TecnoglobalSA',
            web: 'https://www.tecnoglobal.cl/tiendaonline/webapp/home'
        },
        {
            name: "Killstore",
            instagram: "https://www.instagram.com/killstorechile/",
            facebook: "https://www.instagram.com/killstorechile/",
            web: "https://www.killstore.cl/"
        },
        {
            name: "Winpy",
            instagram: "https://www.instagram.com/winpy_cl/",
            facebook: "https://www.instagram.com/winpy_cl/",
            web: "https://www.winpy.cl/"
        }
    ]

    const itemsColom = [
        {
            name: 'INFOSHOP',
            instagram: 'https://www.instagram.com/infoshopcorp/?hl=es-la',
            facebook: 'https://www.facebook.com/infoshop.corp/',
            web: 'https://infoshopcorp.com/'
        },
        {
            name: 'TAURET COMPUTADORES',
            instagram: 'https://www.instagram.com/tauretcomputadores/?hl=es-la',
            facebook: 'https://www.facebook.com/Tauretcomputadores/',
            web: 'https://www.tauretcomputadores.com/home'
        },
        {
            name: 'ENJOY PC',
            instagram: 'https://www.instagram.com/enjoypcsas/?hl=es-la',
            facebook: 'https://www.facebook.com/EnjoyPCsas',
            web: 'https://www.enjoypc.co/'
        },
        {
            name: 'MR.PC STORE',
            instagram: 'https://www.instagram.com/mrpcstore/?hl=es-la',
            facebook: 'https://www.facebook.com/mrpc.com.co',
            web: 'https://www.mrpc.com.co/'
        },
        {
            name: 'CLONES Y PERIFÉRICOS',
            instagram: 'https://www.instagram.com/clonesyperifericos/?hl=es-la',
            facebook: 'https://www.facebook.com/clonesyperifericos/',
            web: 'https://clonesyperifericos.com/'
        },
        {
            name: 'LUOKKA TECHNOLOGY',
            instagram: 'https://www.instagram.com/luokkatechnology/?hl=es-la',
            facebook: 'https://www.facebook.com/luokkatechnology/',
            web: 'https://www.luokka.co/'
        },
        {
            name: 'JE SISTEM',
            instagram: 'https://www.instagram.com/jesistem1/?hl=es-la',
            facebook: 'https://www.facebook.com/JE-Sistem-Technology-316268268385266/',
            web: 'https://jesistem.com/site/'
        },
        {
            name: 'POWER GROUP',
            instagram: 'https://www.instagram.com/pcpowergroup/?hl=es-la',
            facebook: 'https://www.facebook.com/powergroupcol',
            web: 'http://pcpowergroup.com/'
        },
        {
            name: 'PAQUETES Y PROGRAMAS',
            instagram: 'https://www.instagram.com/pyphscolombia/?hl=es-la',
            facebook: 'https://www.facebook.com/pyphscolombia/',
            web: 'https://www.pyphscolombia.com/'
        },
        {
            name: 'PC STORE',
            instagram: 'https://www.instagram.com/pcstorecolombia/?hl=es-la',
            facebook: 'https://www.facebook.com/Pcstore-103432697917538',
        },
        {
            name: 'EVOCOM',
            instagram: 'https://www.instagram.com/evc_gaming/?hl=es-la',
            facebook: 'https://www.facebook.com/pc.evc',
            web: 'http://www.evocom.com.co/'
        },
        {
            name: 'COMPUMAX',
            instagram: 'https://www.instagram.com/compumax.computer/?hl=es-la',
            facebook: 'https://www.facebook.com/compumax.computer/',
            web: 'https://www.compumax.com.co/'
        },
        {
            name: 'COMETWARE',
            instagram: 'https://www.instagram.com/cometware_com/?hl=es-la',
            facebook: 'https://www.facebook.com/cometware',
            web: 'https://cometware.com/'
        },
        {
            name: 'S&M COMPUTERS',
            instagram: 'https://www.instagram.com/symcomputers/?hl=es-la',
            facebook: 'https://www.facebook.com/Symcomputer',
            web: 'https://symcomputadores.com/portal/'
        },
        {
            name: 'JANUS',
            instagram: 'https://www.instagram.com/janusltda/?hl=es-la',
            facebook: 'https://www.facebook.com/JANUS-LTDA-1671348316463295/',
            web: 'https://www.janus.com.co/'
        }
    ]

    const itemsEcua = [
        {
            name: 'TECNOMEGA',
            instagram: 'https://www.instagram.com/tecnomega/?hl=es-la',
            facebook: 'https://www.facebook.com/tecnomegaCA',
            web: 'https://tecnomegastore.ec/'
        }
    ]

    const itemsPeru = [
        {
            name: 'DELTRON',
            instagram: 'https://www.instagram.com/grupodeltronoficial/',
            facebook: 'https://www.facebook.com/DeltronPeru',
            web: 'https://www.deltron.com.pe/index.php?'
        },
        {
            name: 'PC LINK',
            instagram: 'https://www.instagram.com/pclinkperu/',
            facebook: 'https://www.facebook.com/pclinkperu',
            web: 'http://www.pclink.pe/'
        },
        {
            name: 'COMPUDISKETT',
            instagram: 'https://www.instagram.com/compudiskett/',
            facebook: 'https://www.facebook.com/CompudiskettSRLu',
            web: 'https://store.compudiskett.com.pe/'
        },
        {
            name: 'MAXIMA INTERNACIONAL',
            instagram: 'https://www.instagram.com/maximainternacionalperu/',
            facebook: 'https://www.facebook.com/MaximaPeru',
            web: 'https://www.maximainternacional.com.pe/'
        },
        {
            name: 'INGRAM MICRO',
            instagram: 'https://www.instagram.com/ingrammicro_peru/',
            facebook: 'https://www.facebook.com/IngramMicroPeru',
            web: 'https://pe.ingrammicro.com/Site/home'
        },
        {
            name: 'IMPORTACIONES IMPACTO (Reseller)',
            instagram: 'https://www.instagram.com/importaciones.impacto/',
            facebook: 'https://www.facebook.com/importaciones.lmpacto',
            web: 'https://www.impacto.com.pe/'
        },
        {
            name: 'CYC COMPUTER SERVICE (Reseller)',
            instagram: 'https://www.instagram.com/tiendacyccomputer/',
            facebook: 'https://www.facebook.com/cyccomputer',
            web: 'https://cyccomputer.pe/'
        },
        {
            name: 'SERCOPLUS (Reseller)',
            instagram: 'https://www.instagram.com/sercoplus_sac/',
            facebook: 'https://www.facebook.com/cyccomputer',
            web: 'https://cyccomputer.pe/'
        },
    ]

    const noteArgen = [
        {
            name: 'Fravega',
            instagram: 'https://www.instagram.com/fravegaonline/',
            facebook: 'https://www.facebook.com/fravegaonline/',
        },
        {
            name: 'Garbarino',
            instagram: 'https://www.instagram.com/garbarinoarg/',
            facebook: 'https://www.facebook.com/GarbarinoGarantiaDeConfianza',
        },
        {
            name: 'Musimundo',
            instagram: 'https://www.instagram.com/musimundo/',
            facebook: 'https://www.facebook.com/musimundo/',
        },
        {
            name: 'Falabella',
            instagram: 'https://www.instagram.com/falabella_ar/',
            facebook: 'https://www.facebook.com/FalabellaArgentina/',
        },
        {
            name: 'La Anonima',
            instagram: 'https://www.instagram.com/laanonimaoficial/',
            facebook: 'https://www.facebook.com/laanonimaoficial',
        },
        {
            name: 'Mercado Libre',
            instagram: 'https://www.instagram.com/mercadolibre.arg/',
        },
    ]

    const notePcArgen = [
        {
            name: 'Tacco',
            facebook: 'https://www.facebook.com/Tacco-Calpini',
            web: 'https://www.taccocalpinisa.com.ar/'
        },
        {
            name: 'Exing',
            instagram: 'https://www.instagram.com/exingsrl/',
            facebook: 'https://www.facebook.com/ExingSRL',
            web: 'https://exing.com.ar/'
        },
        {
            name: 'PC Center',
            instagram: 'https://www.instagram.com/pccentercomputers/',
            facebook: 'https://www.facebook.com/pccenterargentina',
            web: 'https://pc-center-arg.myshopify.com/'
        },
        {
            name: 'Bidcom',
            instagram: 'https://www.instagram.com/bidcomok/',
            facebook: 'https://www.facebook.com/bidcom',
            web: 'https://www.bidcom.com.ar/'
        },
        {
            name: 'Mexx',
            instagram: 'https://www.instagram.com/mexx.computacion/',
            facebook: 'https://www.facebook.com/MEXXCOMPUTACION',
            web: 'https://www.mexx.com.ar/'
        },
    ]

    const noteChile = [
        {
            name: 'Falabella',
            instagram: 'https://www.instagram.com/falabella_cl/',
            facebook: 'https://www.facebook.com/falabellachile/',
        },
        {
            name: 'Ripley',
            instagram: 'https://www.instagram.com/ripleychile/',
            facebook: 'https://www.facebook.com/ripleychile',
        },
        {
            name: 'Paris',
            instagram: 'https://www.instagram.com/tiendas_paris/',
            facebook: 'https://www.facebook.com/TiendasParis/',
        },
        {
            name: 'Pc Factory',
            instagram: 'https://www.instagram.com/pcfactorycl/',
            facebook: 'https://www.facebook.com/PCFactoryCL/',
        },
        {
            name: 'Abcdin',
            instagram: 'https://www.instagram.com/abcdincl/',
            facebook: 'https://www.facebook.com/abcdincl/',
        },
    ]

    const notePcChile = [
        {
            name: 'Lenovo',
            instagram: 'https://www.instagram.com/lenovochile/',
            facebook: 'https://www.facebook.com/lenovo',
            web: 'https://www.lenovo.com/cl/es/data-center/'
        },
        {
            name: 'HP',
            instagram: 'https://www.instagram.com/HP/',
            facebook: 'https://www.facebook.com/HPChile',
            web: 'https://www.hp.com/cl-es/shop/'
        },
        {
            name: 'Intcomex',
            instagram: 'https://www.instagram.com/intcomexchile/',
            facebook: 'https://www.facebook.com/intcomex.chile',
            web: 'https://store.intcomex.com/es-XCL/Home'
        },
        {
            name: 'Ingram',
            instagram: 'https://www.instagram.com/ingrammicrocl/',
            facebook: 'https://www.facebook.com/IngramMicroCl',
            web: 'https://cl.ingrammicro.com/'
        },
        {
            name: 'Nexys',
            web: 'https://www.nexsysla.com/CHL/inicio'
        },
        {
            name: 'Tecnoglobal',
            instagram: 'https://www.instagram.com/tecnoglobalchile/',
            facebook: 'https://www.facebook.com/TecnoglobalSA',
            web: 'https://www.tecnoglobal.cl/'
        },
    ]

    const noteColom = [
        {
            name: 'Alkosto',
            instagram: 'https://www.instagram.com/alkosto/',
            facebook: 'https://www.facebook.com/alkostohiperahorro?_rdc=1&_rdr',
            web: 'https://www.alkosto.com/'
        },
        {
            name: 'Ktronix',
            facebook: 'https://www.facebook.com/ktronix?_rdc=1&_rdr',
            web: 'https://www.ktronix.com/'
        },
        {
            name: 'Exito',
            instagram: 'https://www.instagram.com/exito/',
            facebook: 'https://www.facebook.com/exito?_rdc=1&_rdr',
            web: 'https://www.exito.com/'
        },
        {
            name: 'Falabella',
            instagram: 'https://www.instagram.com/falabella_co/',
            facebook: 'https://www.facebook.com/FalabellaColombia?_rdc=1&_rdr',
            web: 'https://www.falabella.com.co/falabella-co'
        },
        {
            name: 'Panamericana',
            instagram: 'https://www.instagram.com/panamericana/',
            facebook: 'https://www.facebook.com/Panamericana?_rdc=1&_rdr',
            web: 'https://www.panamericana.com.co/'
        },
        {
            name: 'Alkomprar',
            instagram: 'https://www.instagram.com/alkomprar.oficial/',
            facebook: 'https://www.facebook.com/alkomprar?_rdc=1&_rdr',
            web: 'https://www.alkomprar.com/'
        },
        {
            name: 'Cencosud',
            instagram: 'https://www.instagram.com/tiendasjumbocolombia/',
            facebook: 'https://www.facebook.com/TiendasJumboColombia?_rdc=1&_rdr',
            web: 'https://www.tiendasjumbo.co/ofertas?gclid=Cj0KCQiA34OBBhCcARIsAG32uvMbMsGrYH3kC99zEaH6jm4ZMtnPmY8XtPfztFExKximIlPWuYXi2wwaAqGdEALw_wcB'
        },
    ]
    const notePcColom = [
        {
            name: 'HP',
            instagram: 'https://www.instagram.com/HP/',
            facebook: 'https://www.facebook.com/HPColombia?_rdc=1&_rdr',
            web: 'https://www.hp.com/co-es/shop/portatiles-tablets-empresariales'
        },
        {
            name: 'Lenovo',
            instagram: 'https://www.instagram.com/lenovocolombia/',
            facebook: 'https://www.facebook.com/Lenovo-Colombia-386858998845298?_rdc=1&_rdr',
            web: 'https://www.lenovo.com/co/es/laptops/c/LAPTOPS#view-all'
        },
        {
            name: 'Lenovo DCG',
            instagram: 'https://www.instagram.com/lenovocolombia/',
            facebook: 'https://www.facebook.com/Lenovo-Colombia-386858998845298?_rdc=1&_rdr',
            web: 'https://www.lenovo.com/co/es/data-center/epyc'
        },
        {
            name: 'HPE',
            web: 'https://www.hpe.com/lamerica/es/solutions/amd.html'
        },
    ]

    const notePeru = [
        {
            name: 'INGRAM MICRO',
            instagram: 'https://www.instagram.com/ingrammicro_peru/',
            facebook: 'https://www.facebook.com/IngramMicroPeru',
            web: 'https://pe.ingrammicro.com/Site/home'
        },
        {
            name: 'RIPLEY',
            instagram: 'https://www.instagram.com/ripleyperu/?hl=es-la',
            facebook: 'https://www.facebook.com/RipleyPeru',
            web: 'https://simple.ripley.com.pe/'
        },
        {
            name: 'SAGA FALABELLA',
            instagram: 'https://www.instagram.com/falabella_pe/?hl=es-la',
            facebook: 'https://www.facebook.com/sagafalabella',
            web: 'https://www.falabella.com.pe/falabella-pe'
        },
        {
            name: 'HIRAOKA',
            instagram: 'https://www.instagram.com/hiraokaperu/?hl=es-la',
            facebook: 'https://www.facebook.com/HiraokaPeru',
            web: 'https://hiraoka.com.pe/'
        },
        {
            name: 'LA CURACAO',
            instagram: 'https://www.instagram.com/lacuracao.pe/?hl=es-la',
            facebook: 'https://www.facebook.com/LaCuracaoPeru',
            web: 'https://www.lacuracao.pe/'
        },
        {
            name: 'OECHSLE',
            instagram: 'https://www.instagram.com/oechsleperu/?hl=es-la',
            facebook: 'https://www.facebook.com/tiendasoechsle',
            web: 'https://www.oechsle.pe/'
        },
    ]
    const notePcPeru = [
        {
            name: 'DELTRON',
            instagram: 'https://www.instagram.com/grupodeltronoficial/',
            facebook: 'https://www.facebook.com/DeltronPeru',
            web: 'https://www.deltron.com.pe/index.php?'
        },
        {
            name: 'PC LINK',
            instagram: 'https://www.instagram.com/pclinkperu/',
            facebook: 'https://www.facebook.com/pclinkperu',
            web: 'http://www.pclink.pe/'
        },
        {
            name: 'MAXIMA INTERNACIONAL',
            instagram: 'https://www.instagram.com/maximainternacionalperu/',
            facebook: 'https://www.facebook.com/MaximaPeru',
            web: 'https://www.maximainternacional.com.pe/'
        },
        {
            name: 'INGRAM MICRO',
            instagram: 'https://www.instagram.com/ingrammicro_peru/',
            facebook: 'https://www.facebook.com/IngramMicroPeru',
            web: 'https://pe.ingrammicro.com/Site/home'
        },
    ]
    const defaultaaa = [
        {
            name: '',
            instagram: '',
            facebook: '',
            web: ''
        },
    ]
    const [Region, setRegion] = useState("argentina");
    const [Reseller, setReseller] = useState(itemsArgen);
    const [ProductType, setProductType] = useState("components");

    return (
        <div className="reseller-case">
            <div style={{ textAlign: "center", justifyContent: "center", marginTop: 30 }}>
                <p>DÓNDE COMPRAR</p>
                <h1>DISTRIBUIDORES AUTORIZADOS</h1>
            </div>
            <div className="regions-nav">
                <button
                    className={Region === "argentina" ? "activo" : ""}
                    onClick={() => {
                        setRegion("argentina");
                        setProductType("components");
                        setReseller(itemsArgen);
                    }}
                >
                    ARGENTINA</button>
                <button
                    className={Region === "bolivia" ? "activo" : ""}
                    onClick={() => {
                        setRegion("bolivia");
                        setReseller(itemsBoliv);
                    }}
                >BOLIVIA</button>
                <button
                    className={Region === "chile" ? "activo" : ""}
                    onClick={() => {
                        setRegion("chile");
                        setProductType("components");
                        setReseller(itemsChile);
                    }}
                >CHILE</button>
                <button
                    className={Region === "colombia" ? "activo" : ""}
                    onClick={() => {
                        setRegion("colombia");
                        setProductType("components");
                        setReseller(itemsColom);

                    }}
                >COLOMBIA</button>
                <button
                    className={Region === "ecuador" ? "activo" : ""}
                    onClick={() => {
                        setRegion("ecuador");
                        setReseller(itemsEcua);
                    }}
                >ECUADOR</button>
                <button
                    className={Region === "peru" ? "activo" : ""}
                    onClick={() => {
                        setRegion("peru");
                        setProductType("components");
                        setReseller(itemsPeru);
                    }}
                >PERU</button>
            </div>
            <div className="resellers-group">
                {
                    Region === "bolivia" || Region === "ecuador" ? null : (
                        <div className="product-type-case">
                            <button
                                className={ProductType === "components" ? "activo" : ""}
                                onClick={() => {
                                    setProductType("components");
                                    if (Region === "argentina") {
                                        setReseller(itemsArgen);
                                    } else if (Region === "chile") {
                                        setReseller(itemsChile);
                                    } else if (Region === "colombia") {
                                        setReseller(itemsColom);
                                    } else if (Region === "peru") {
                                        setReseller(itemsPeru);
                                    }
                                }}
                            >COMPONENTES PARA PC</button>
                            <button
                                className={ProductType === "note" ? "activo" : ""}
                                onClick={() => {
                                    setProductType("note");
                                    if (Region === "argentina") {
                                        setReseller(noteArgen);
                                    } else if (Region === "chile") {
                                        setReseller(noteChile);
                                    } else if (Region === "colombia") {
                                        setReseller(noteColom);
                                    } else if (Region === "peru") {
                                        setReseller(notePeru);
                                    }
                                }}
                            >NOTEBOOKS</button>
                            <button
                                className={ProductType === "note&pc" ? "activo" : ""}
                                onClick={() => {
                                    setProductType("note&pc");
                                    if (Region === "argentina") {
                                        setReseller(notePcArgen);
                                    } else if (Region === "chile") {
                                        setReseller(notePcChile);
                                    } else if (Region === "colombia") {
                                        setReseller(notePcColom);
                                    } else if (Region === "peru") {
                                        setReseller(notePcPeru);
                                    }
                                }}
                            >NOTEBOOKS Y PC PARA EMPRESAS</button>
                        </div>
                    )
                }

                <div className="resellers-all-content">
                    {Reseller.values !== null ? (
                        Reseller.map((value, index) => {
                            return (
                                <div className="reseller-cube">
                                    <p>{value.name}</p>
                                    <div className="d-flex justify-center">
                                        {
                                            value.facebook !== undefined ? (
                                                <a href={value.facebook} target="__blank">
                                                    <img src={facebook} alt="imagenface" />
                                                </a>
                                            ) : null
                                        }
                                        {
                                            value.instagram !== undefined ? (
                                                <a href={value.instagram} target="__blank">
                                                    <img src={instagram} alt="imagenins" />
                                                </a>
                                            ) : null
                                        }
                                        {
                                            value.web !== undefined ? (
                                                <a href={value.web} target="__blank">
                                                    <img src={globo} alt="imagenweb" />
                                                </a>
                                            ) : null
                                        }
                                    </div>

                                </div>
                            );
                        })
                    ) : null}
                </div>
            </div>
        </div>
    );
}
