import { useState } from "react";

const Carrinho = () => {
    const [qtd, setQtd] = useState(0)

    return (
        <>
        COCA COLA | R$ 6.00
        <button> - </button>
        {qtd}
        <button> + </button>
        </> 
    );
}
 
export default Carrinho;