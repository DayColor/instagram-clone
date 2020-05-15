import { Navigation } from 'react-native-navigation';
import FeedsScreen from './FeedsScreen';
import ExploreScreen from './ExploreScreen';

export const registerScreen = () => {
  Navigation.registerComponent('instagramClone.FeedsScreen', () => FeedsScreen);
  Navigation.registerComponent(
    'instagramClone.ExploreScreen',
    () => ExploreScreen,
  );
};
