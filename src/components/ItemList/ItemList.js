import Item from '../Item/Item';

const ItemList = ({ todoItem }) => (<ul>
  <li><Item todoItem={todoItem} /></li>
  <li><Item todoItem={'Почитать книгу'} /></li>
  <li><Item todoItem={'Скушать шоколадку'} /></li>
</ul>);

export default ItemList;
