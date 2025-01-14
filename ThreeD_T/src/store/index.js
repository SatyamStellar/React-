import { proxy } from "valtio";

const state = proxy({
    intro: true,
    color: '#EFBD48',
    isLogoTexture: true,
    inFullTexture: false,
    logoDecal: './treejs.png',
    fullDecal: './threejs.png'
})

export default state;
