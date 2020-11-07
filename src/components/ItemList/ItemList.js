import Item from '../Item/Item';
import styles from './ItemList.module.css';
import classnames from 'classnames';

const ItemList = ({ items }) => (<ul className={
  classnames ({
    [styles.list]: true
  })
}>
  {items.map(item => <li className={styles.li} key={item.value}>
    <Item value={item.value} isDone={item.isDone} />
  </li>)}
</ul>);

export default ItemList;
