import './style.css';
import produtos from '/src/data/produtos.json'
const Carrinho = () => {

    const add = (id) => {

    }
    return (
        <ul>

            {produtos.map(item => (
                <li>
                    {item.nome} | {item.preco}
                    <button> + </button>
                    {qtd}
                </li>
            ))}
        </ul>
    );
}

export default Carrinho;