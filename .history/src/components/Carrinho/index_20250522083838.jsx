import './style.css';
import produtos from '/src/data/produtos.json'
const Carrinho = () => {

    const add = (id) => {

    }
    return (
        <ul>
            
        </ul>
        {produtos.map(item => (
            <div>
                {item.nome} | {item.preco}
                <button> + </button>
            </div>
        ))}
        );
}

export default Carrinho;