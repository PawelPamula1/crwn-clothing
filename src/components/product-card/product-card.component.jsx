import { useContext } from 'react';

import Button from '../button/button.component';

import { CartContext } from '../../context/cart.context';
import {
  Footer,
  Name,
  Price,
  ProductCartContainer,
} from './product-card.styles.jsx';

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);
  return (
    <ProductCartContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
        <Button buttonType="inverted" onClick={addProductToCart}>
          Add to Card
        </Button>
      </Footer>
    </ProductCartContainer>
  );
};

export default ProductCard;
