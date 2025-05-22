import { useState } from "react";

const Carrinho = () => {
    const [qtd, setQtd] = useState(0)

    const add = () => {
        setQtd(qtd + 1)
    }

    const remove = () => {
        qtd > 0 && setQtd(qtd - 1)
    }
    return (
        <>
            COCA COLA | R$ 6.00
            TAPIOCA | R$ 10.00
        </>
    );
}

export default Carrinho;