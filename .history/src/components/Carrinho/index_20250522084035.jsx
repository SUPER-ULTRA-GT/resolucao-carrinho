import './style.css';
import produtos from '/src/data/produtos.json'
const Carrinho = () => {

    const add = (id) => {

    }
    return (
        <ul>

            {produtos.map(item => (
                <li key={item.id}>
                    {item.nome} | {item.preco}
                    <button> + </button>
                    {item.qtd}
                    <button> - </button>
                </li>
            ))}
        </ul>
    );
}

export default Carrinho;