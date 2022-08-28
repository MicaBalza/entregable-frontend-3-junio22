import { useState } from 'react';
import Header from './components/Header';
import List from './components/List';

function App() {
  const [purchasedProducts, setPurchasedProducts] = useState(0);

  const handleProductAdded = () => setPurchasedProducts(purchasedProducts + 1);

  return (
    <div className="App">
      <Header quantity={purchasedProducts} />
      <List onProductAdded={handleProductAdded} />
    </div>
  );
}

export default App;
