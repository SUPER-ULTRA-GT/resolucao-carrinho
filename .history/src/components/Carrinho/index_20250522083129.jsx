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
    return (
        <div className="produtos">
            <div>
                COCA COLA | R$ 6.00
                <button onClick={() => removeCoca()}> - </button>
                {qtdCoca}
                <button onClick={() => addCoca()}> + </button>
            </div>
            <div>
                TAPIOCA | R$ 10.00
                <button onClick={() => removeTapioca()}> - </button>

                <button onClick={() => addTapioca()}> + </button>
            </div>
        </div>
    );
}

export default Carrinho;