import Button, { BUTTON_TYPES_CLASSES } from '../button/button.component';
import {
  Footer,
  Name,
  Price,
  ProductCartContainer,
} from './product-card.styles.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from '../../store/cart/cart.action';
import { selectCartItems } from '../../store/cart/cart.selector';

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();
  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));
  return (
    <ProductCartContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
        <Button
          buttonType={BUTTON_TYPES_CLASSES.inverted}
          onClick={addProductToCart}>
          Add to Card
        </Button>
      </Footer>
    </ProductCartContainer>
  );
};

export default ProductCard;
