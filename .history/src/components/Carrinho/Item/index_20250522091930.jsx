const Item = ({ id, nome, preco, quantidade, remove, add })=> {
    return ( 
                    <li key={id}>
                        {nome} | R${preco.toFixed(2)}
                        <button onClick={() => remove(id)}> - </button>
                        {quantidade}
                        <button onClick={() => add(id)}> + </button>
                    </li>
     );
}
 
export default Item;