import { useEffect, useState } from 'react'; // Ferramentas do React para gerenciar o estado e efeitos colaterais
import './style.css'; // Estilos visuais para o carrinho
import produtos from '/src/data/produtos.json'; // Lista inicial de produtos (vem de um arquivo JSON)
import Item from './Item'; // Componente que representa cada item individual no carrinho

const Carrinho = () => { // "Carrinho" é o nome do nosso componente

    // "useState" é como a memória do componente.
    // "items" guarda a lista de produtos no carrinho e "setItems" é a função para atualizar essa lista.
    // Começa com uma cópia da lista de produtos importada.
    const [items, setItems] = useState([...produtos]);
    // const [items, setItems] = useState([
    // {
    //     "id": 1,
    //     "nome": "Coca-cola",
    //     "preco": 6,
    //     "quantidade": 0
    // }
    // ,
    // {
    //     "id": 2,
    //     "nome": "Tapioca",
    //     "preco": 10,
    //     "quantidade": 0
    // }
    // ,
    // {
    //     "id": 3,
    //     "nome": "Cafe",
    //     "preco": 2,
    //     "quantidade": 0
    // }
    // ])
    // "precoTotal" guarda o valor total da compra e "setPrecoTotal" atualiza esse valor.
    // Começa em 0.
    const [precoTotal, setPrecoTotal] = useState(0);

    // "useEffect" executa um código sempre que algo específico mudar.
    // Aqui, ele vai recalcular o "precoTotal" toda vez que a lista "items" for alterada.
    useEffect(() => {
        // "reduce" é uma forma de percorrer a lista de "items" e acumular um valor.
        // Para cada "item", ele multiplica a "quantidade" pelo "preco" e soma ao "total".
        const geral = items.reduce((total, item) => total + item.quantidade * item.preco, 0);
        setPrecoTotal(geral); // Atualiza o estado do preço total
    }, [items]); // A vírgula [items] diz: "só execute de novo se 'items' mudar"


    // Função para REMOVER um item (ou diminuir a quantidade)
    const remove = (id) => {
        const lista = [...items]; // Cria uma cópia da lista de itens atual para não modificar a original diretamente
        const index = lista.findIndex(produto => produto.id === id); // Encontra o produto na lista pelo seu "id"
        const produtoSelecionado = lista[index]; // Pega o produto encontrado

        // Verifica se a quantidade do produto é maior que 0 antes de diminuir
        if (produtoSelecionado.quantidade > 0) {
            produtoSelecionado.quantidade--; // Diminui a quantidade em 1
        }
        setItems(lista); // Atualiza a lista de itens no estado, o que vai fazer o "useEffect" rodar de novo
    }

    // Função para ADICIONAR um item (ou aumentar a quantidade)
    const add = (id) => {
        const lista = [...items]; // Cria uma cópia da lista
        const index = lista.findIndex(produto => produto.id === id); // Encontra o produto
        const produtoSelecionado = lista[index]; // Pega o produto

        produtoSelecionado.quantidade++; // Aumenta a quantidade em 1
        setItems(lista); // Atualiza a lista de itens, disparando o "useEffect"
    }

    // "return" é o que o componente vai mostrar na tela (em formato JSX, que parece HTML)
    return (
        <> {/* Fragmento: um jeito de agrupar elementos sem criar um nó extra no HTML */}
            <ul className='produtos'> {/* Uma lista não ordenada para os produtos */}
                {/* "map" percorre a lista "produtos" original (a que veio do JSON).
                    Para cada "item" nessa lista, ele cria um componente "Item". */}
                {produtos.map(item => (
                    <Item key={item.id} // "key" é um identificador único para o React
                        id={item.id} // Passa o id do item
                        {...item} // "..." espalha todas as propriedades do "item" (nome, preco, etc.) como props
                        remove={remove} // Passa a função "remove" para o componente Item
                        quantidade={item.quantidade} // Passa a quantidade atual do item
                        add={add} // Passa a função "add" para o componente Item
                    />
                ))}
                {produtos.map(item =>(
                    <li key={item.id}
                    {item.nome} | {item.preco}
                    <button> - </button>
                    
                    >
                    </li>
                ))}
            </ul>
            <h4>R${precoTotal.toFixed(2)}</h4> {/* Mostra o preço total formatado com duas casas decimais */}
        </>
    );
}

export default Carrinho; // Permite que outros arquivos usem este componente "Carrinho"