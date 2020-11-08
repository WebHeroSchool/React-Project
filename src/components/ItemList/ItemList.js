import Item from '../Item/Item';
import styles from './ItemList.module.css';
import classnames from 'classnames';

const ItemList = ({ items, onClickDone, onClickDelete }) => (<ul className={
  classnames ({
    [styles.list]: true
  })
}>
  {items.map(item => <li className={styles.li} key={item.value}>
    <Item
      value={item.value}
      isDone={item.isDone}
      id={item.id}
      onClickDone={onClickDone}
      onClickDelete={onClickDelete}
    />
  </li>)}
</ul>);

export default ItemList;
