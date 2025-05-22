import { useState } from "react";

const Carrinho = () => {
    const [qtd, setQtd] = useState(0)

    
    return (
        <>
        COCA COLA | R$ 6.00
        <button onClick={}> - </button>
        {qtd}
        <button onClick={}> + </button>
        </> 
    );
}
 
export default Carrinho;