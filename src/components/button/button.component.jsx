import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from './button.styles';

export const BUTTON_TYPES_CLASSES = {
  base: 'base',
  google: 'google-sign-in',
  inverted: 'inverted',
};

const Button = ({ children, buttonType, ...otherProps }) => {
  switch (buttonType) {
    case BUTTON_TYPES_CLASSES.google:
      return (
        <GoogleSignInButton {...otherProps}>{children}</GoogleSignInButton>
      );
    case BUTTON_TYPES_CLASSES.inverted:
      return <InvertedButton {...otherProps}>{children}</InvertedButton>;
    default:
      return <BaseButton {...otherProps}>{children}</BaseButton>;
  }
};

export default Button;
