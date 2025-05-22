// Recebe várias "props" (propriedades) do componente Carrinho:
// id, nome, preco, quantidade, e as funções remove e add
const Item = ({ id, nome, preco, quantidade, remove, add }) => {
    return (
        <li> {/* Cada item é um elemento de lista */}
            {nome} | R${preco.toFixed(2)} {/* Mostra o nome e o preço formatado */}
            <button onClick={() => remove(id)}> - </button> {/* Botão para remover (chama a função "remove" passada pelo Carrinho, com o "id" do item) */}
            {quantidade} {/* Mostra a quantidade atual do item */}
            <button onClick={() => add(id)}> + </button> {/* Botão para adicionar (chama a função "add" passada pelo Carrinho, com o "id" do item) */}
        </li>
    );
}

export default Item; // Permite que outros arquivos usem este componente "Item"