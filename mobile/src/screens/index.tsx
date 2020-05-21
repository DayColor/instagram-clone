import { Navigation } from 'react-native-navigation';
import ExploreScreen from './ExploreScreen';
import FeedsScreen from './FeedsScreen';
import LoginScreen from './LoginScreen';
import WithProvider from '../components/WithProvider';

export const registerScreen = () => {
  Navigation.registerComponent('instagramClone.FeedsScreen', () =>
    WithProvider(FeedsScreen),
  );
  Navigation.registerComponent('instagramClone.ExploreScreen', () =>
    WithProvider(ExploreScreen),
  );
  Navigation.registerComponent('instagramClone.LoginScreen', () =>
    WithProvider(LoginScreen),
  );
};
