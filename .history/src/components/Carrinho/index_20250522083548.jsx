import './style.css';
import { useState } from "react";

const Carrinho = () => {
    const [qtdCoca, setQtdCoca] = useState(0)
    const [qtdTapioca, setQtdTapioca] = useState(0)

    const addCoca = () => {
        setQtdCoca(qtdCoca + 1)
    }

    const removeCoca = () => {
        qtdCoca > 0 && setQtdCoca(qtdCoca - 1)
    }

    const addTapioca = () => {
        setQtdTapioca(qtdTapioca + 1);
    }

    const removeTapioca = () => {
        qtdTapioca > 0 && setQtdTapioca(qtdTapioca - 1)
    }

    const total = qtdCoca * 6 + qtdTapioca * 10;
    return (

    );
}

export default Carrinho;