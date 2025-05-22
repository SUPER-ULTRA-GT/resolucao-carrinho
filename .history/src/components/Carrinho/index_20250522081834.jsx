import { useState } from "react";

const Carrinho = () => {
    const [qtd, setQtd] = useState([])

    return (
        <>
        COCA COLA | R$ 6.00
        <button> - </button>
        0
        <button> + </button>
        </> 
    );
}
 
export default Carrinho;