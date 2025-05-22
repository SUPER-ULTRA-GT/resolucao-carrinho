import { useState } from 'react';
import './style.css';
import produtos from '/src/data/produtos.json'
const Carrinho = () => {

    const [items, setItems] = useState(...produtos)
    const add = (id) => {

    }
    const remove = (id) => {
        const lista = [...items];
        const index = lista.indexOf(lista.filter(item => item.id === id));
        setItems(lista[index].quantidade + 1)
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