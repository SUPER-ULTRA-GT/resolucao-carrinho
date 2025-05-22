import './style.css';
import produtos from '/src/data/produtos.json'
const Carrinho = () => {

    const add = (id) => {

    }
    const remove = (id) => {

    }
    return (
        <ul className='produtos'>

            {produtos.map(item => (
                <li key={item.id}>
                    {item.nome} | R${item.preco.toFixed(2)}
                    <button onClick={() => }> - </button>
                    {item.qtd}
                    <button> + </button>
                </li>
            ))}
        </ul>
    );
}

export default Carrinho;