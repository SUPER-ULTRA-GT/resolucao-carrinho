import { useState } from "react";

const Carrinho = () => {
    const [qtdCoca, setQtdCoca] = useState(0)

    const add = () => {
        setQtdCoca(qtdCoca + 1)
    }

    const remove = () => {
        qtdCoca > 0 && setQtdCoca(qtdCoca - 1)
    }
    return (
        <>
            <div>
                COCA COLA | R$ 6.00
                </div>
            <button onClick={() => remove()}> - </button>
            {qtdCoca}
            <button onClick={() => add()}> + </button>
            TAPIOCA | R$ 10.00
            <button onClick={() => remove()}> - </button>
            
            <button onClick={() => add()}> + </button>
        </>
    );
}

export default Carrinho;