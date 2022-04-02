import ItemComponent from './ItemComponent';
import Item from '../models/item';

type ItemGroupType = {
  items: Item[];
  deleteItem: (id: string) => void;
}

const ItemGroup = ({ items, deleteItem }: ItemGroupType) => (
  <ul className='m-4 grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4'>
    { items.map((item) => (
      <ItemComponent
        key={item.id}
        item={item}
        deleteItem={deleteItem}
      />
    ))}
  </ul>
);

export default ItemGroup;