const Item = (props) => {
    return ( 
                    <li key={props.id}>
                        {props.nome} | R${props.preco.toFixed(2)}
                        <button onClick={() => remove(props.id)}> - </button>
                        {props.quantidade}
                        <button onClick={() => add(props.id)}> + </button>
                    </li>
     );
}
 
export default Item;