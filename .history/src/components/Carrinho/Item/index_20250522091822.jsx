const Item = () => {
    return ( 
                    <li key={item.id}>
                        {item.nome} | R${item.preco.toFixed(2)}
                        <button onClick={() => remove(item.id)}> - </button>
                        {item.quantidade}
                        <button onClick={() => add(item.id)}> + </button>
                    </li>
     );
}
 
export default Item;