import { useState } from 'react';

const Item = ({ product, onItemPurchased }) => {
  const { producto, stock } = product;
  const [itemStock, setItemStock] = useState(stock);

  const handleClick = () => {
    setItemStock(itemStock - 1);
    onItemPurchased();
  };

  return (
    <div className="producto">
      <h3>{producto.nombre}</h3>
      <p>{producto.descripcion}</p>
      <h5>En stock: {itemStock > 0 ? itemStock : <span>agotado</span>}</h5>
      <button disabled={itemStock <= 0} onClick={handleClick}>
        {itemStock <= 0 ? 'SIN STOCK' : 'COMPRAR'}
      </button>
    </div>
  );
};

export default Item;
