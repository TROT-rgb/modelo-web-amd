import { asus, cougar, killstore, plazavea, wd, wong, winpy, ingram, memory_king } from "../../Provider";

const marcas = [
    {
        invert: true,
        name: 'asus',
        src: asus,
        link: 'https://www.asus.com/ar/'
    },
    {
        invert: false,
        name: 'wd',
        src: wd,
        link: 'https://www.westerndigital.com/'
    },
    {
        invert: false,
        name: 'cougar',
        src: cougar,
        link: 'https://cougargaming.com/es/'
    },
    {
        invert: false,
        name: 'ingram',
        src: ingram,
        link: 'https://corp.ingrammicro.com/'
    },
];

const marcas_dos = [
    {
        invert: false,
        name: 'winpy',
        src: winpy,
        link: 'https://www.winpy.cl/'
    },
    {
        invert: false,
        name: 'killstore',
        src: killstore,
        link: 'https://www.killstore.cl/'
    },
    {
        invert: false,
        name: 'plazavea',
        src: plazavea,
        link: 'https://www.plazavea.com.pe/notebook-hp-15eh0010la-15-amd-r7-8gb-512gb-ssd/p'
    },
    {
        invert: false,
        name: 'wong',
        src: wong,
        link: 'https://www.wong.pe/lenovo-laptop-14-ideapad-5-amd-ryzen-5-mouse-optico-938407/p'
    },
    {
        invert: false,
        name: 'memory king',
        src: memory_king,
        link: 'https://www.memorykings.com.pe/producto/329854/laptop-ryzen5-asus-zenbook-um425-8-s512-13-3-w10'
    }
];

export { marcas, marcas_dos };