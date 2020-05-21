import AsyncStorage from '@react-native-community/async-storage';
import { authToken } from './constants';
import { iconsLoaded } from './themes';
import { startLogin, startMainApp } from '../Nav';

export const appInitialized = async () => {
  await iconsLoaded();

  const token = await AsyncStorage.getItem(authToken);

  if (!token) {
    startLogin();
  } else {
    startMainApp();
  }
};
