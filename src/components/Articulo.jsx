import { Component } from "react"
import BateriasLitio from "./BateriasLitio";
import Hidrogeno from "./Hidrogeno";
import Likes from "./Likes";
import PilasConvencionales from "./PilasConvencionales";

class Articulo extends Component{

    render() {
        return (
        <div>
            <PilasConvencionales />
            <BateriasLitio />
            <Hidrogeno />
            <Likes />
        </div>
        )
    }
}

export default Articulo;
