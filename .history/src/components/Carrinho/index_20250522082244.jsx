import { useState } from "react";

const Carrinho = () => {
    const [qtd, setQtd] = useState(0)

    const add = () => {
        setQtd(qtd + 1)
    }

    const r
    return (
        <>
            COCA COLA | R$ 6.00
            <button> - </button>
            {qtd}
            <button onClick={() => add()}> + </button>
        </>
    );
}

export default Carrinho;