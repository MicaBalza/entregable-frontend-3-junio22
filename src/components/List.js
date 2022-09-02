import Item from './Item';
import products from '../data/products.json';

const List = ({ onProductAdded }) => {
  return (
    <div className="container">
      {products.map((product) => (
        <Item
          key={product.id}
          product={product}
          onItemPurchased={onProductAdded}
        />
      ))}
    </div>
  );
};

export default List;
