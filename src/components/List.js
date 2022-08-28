import Item from './Item';
import productos from './data.json';

const List = ({ onProductAdded }) => {
  return (
    <div className="container">
      {productos.map((producto) => (
        <Item
          key={producto.id}
          product={producto}
          onItemPurchased={onProductAdded}
        />
      ))}
    </div>
  );
};

export default List;
