import './style.css';
import produtos from '/src/data/produtos.json'
const Carrinho = () => {

    const add = (id) => {

    }
    return (
        {produtos.map(item => (
            <Item
        ))}
        );
}

export default Carrinho;