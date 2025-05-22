import './style.css';
import produtos from '/src/data/produtos.json'
const Carrinho = () => {

    const add = (id) => {

    }
    const remove = (id) => {
        const lista = [...produtos];
        const index = lista.indexOf(lista.filter(item => item.id === id));
        
    }
    return (
        <ul className='produtos'>

            {produtos.map(item => (
                <li key={item.id}>
                    {item.nome} | R${item.preco.toFixed(2)}
                    <button onClick={() => remove(item.id)}> - </button>
                    {item.quantidade}
                    <button onClick={() => add(item.id)}> + </button>
                </li>
            ))}
        </ul>
    );
}

export default Carrinho;