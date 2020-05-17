import { ImageStyle, Insets } from 'react-native';

export const makeCircle = (size: number): ImageStyle => ({
  height: size,
  width: size,
  borderRadius: size / 2,
});

export const makeHitSlop = (size: number): Insets => ({
  left: size,
  right: size,
  top: size,
  bottom: size,
});
