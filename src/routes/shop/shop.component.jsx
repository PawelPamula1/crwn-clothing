import { useContext } from 'react';
import { ProductsContext } from '../../context/products.context';

const Shop = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div>
      {products.map((product) => (
        <div>
          <h1>{product.name}</h1>
        </div>
      ))}
    </div>
  );
};

export default Shop;
