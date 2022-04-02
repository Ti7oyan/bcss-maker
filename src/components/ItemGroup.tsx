import ItemComponent from './ItemComponent';
import Item from '../models/item';

type ItemGroupType = {
  items: Item[];
  deleteItem: (id: string) => void;
}

const ItemGroup = ({ items, deleteItem }: ItemGroupType) => (
  <ul>
    { items.map((item) => (
      <ItemComponent
        key={item.getId()}
        item={item}
        deleteItem={deleteItem}
      />
    ))}
  </ul>
);

export default ItemGroup;