import { Navigation } from 'react-native-navigation';
import { registerScreen } from './screens';
import { iconsLoaded, iconsMap } from './utils/themes';

registerScreen();

class Nav {
  constructor() {
    iconsLoaded.then(() => Nav.initApp());
  }

  private static initApp() {
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
  }
}

export default Nav;
