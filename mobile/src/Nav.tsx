import { Navigation } from 'react-native-navigation';
import { registerScreen } from './screens';
import { iconsMap } from './utils/themes';

registerScreen();

export const startLogin = () => {
  Navigation.setRoot({
    root: {
      component: {
        name: 'instagramClone.LoginScreen',
        options: {
          navigationBar: {
            visible: false,
          },
        },
      },
    },
  });
};

export const startMainApp = () => {
  Navigation.setRoot({
    root: {
      bottomTabs: {
        children: [
          {
            component: {
              name: 'instagramClone.FeedsScreen',
              options: {
                topBar: {
                  title: {
                    text: 'Instagram',
                  },
                },
                bottomTab: {
                  text: 'Instagram',
                  icon: iconsMap.home,
                },
              },
            },
          },
          {
            component: {
              name: 'instagramClone.ExploreScreen',
              options: {
                topBar: {
                  title: {
                    text: 'Explore',
                  },
                },
                bottomTab: {
                  text: 'Explore',
                  icon: iconsMap['ios-search'],
                },
              },
            },
          },
        ],
      },
    },
  });
};
