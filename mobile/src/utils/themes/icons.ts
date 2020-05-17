import { Platform, PixelRatio } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import { ImageSource } from 'react-native-vector-icons/Icon';
import Ionicons from 'react-native-vector-icons/Ionicons';

const navIconSize =
  __DEV__ === false && Platform.OS === 'android'
    ? PixelRatio.getPixelSizeForLayoutSize(25)
    : 25;

const replaceSuffixPattern = /--(active|big|small|very-big)/g;

const icons = <const>{
  home: [navIconSize, Entypo],
  'ios-search': [navIconSize, Ionicons],
};

const iconsMap: Record<keyof typeof icons | string, ImageSource> = {};

const iconsLoaded = new Promise((resolve, reject) => {
  Promise.all(
    (Object.keys(icons) as (keyof typeof icons)[]).map((iconName) => {
      const Provider = icons[iconName][1];
      return Provider.getImageSource(
        iconName.replace(replaceSuffixPattern, ''),
        icons[iconName][0],
      );
    }),
  )
    .then((sources) => {
      (Object.keys(icons) as (keyof typeof icons)[]).forEach(
        (iconName, i) => (iconsMap[iconName] = sources[i]),
      );

      resolve(true);
    })
    .catch(reject);
});

export { iconsMap, iconsLoaded };
