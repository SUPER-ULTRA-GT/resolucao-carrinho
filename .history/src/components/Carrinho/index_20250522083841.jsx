import './style.css';
import produtos from '/src/data/produtos.json'
const Carrinho = () => {

    const add = (id) => {

    }
    return (
        <ul>

        {produtos.map(item => (
            <div>
                {item.nome} | {item.preco}
                <button> + </button>
            </div>
        ))}
        </ul>
        );
}

export default Carrinho;