import { useState } from "react";

const Carrinho = () => {
    const [qtd, setQtd] = useState(0)

    const add = () => {
        setQtd(qtd + 1)
    }

    const remove = () => {
        if (setQtd(qtd - 1)
    }
    return (
        <>
            COCA COLA | R$ 6.00
            <button onClick={() => remove()}> - </button>
            {qtd}
            <button onClick={() => add()}> + </button>
        </>
    );
}

export default Carrinho;