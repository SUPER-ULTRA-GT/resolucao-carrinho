import { useState } from 'react';
import './style.css';
import produtos from '/src/data/produtos.json'
const Carrinho = () => {

    const [items, setItems] = useState([...produtos]);
    const [precoTotal, set]


    const remove = (id) => {
        const lista = [...items];
        const index = lista.findIndex(produto => produto.id === id);
        const produtoSelecionado = lista[index];
        produtoSelecionado.quantidade > 0 &&
            produtoSelecionado.quantidade--;
        setItems(lista)
    }

    const add = (id) => {
        const lista = [...items];
        const index = lista.findIndex(produto => produto.id === id);
        const produtoSelecionado = lista[index];
        produtoSelecionado.quantidade++;
        setItems(lista)
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