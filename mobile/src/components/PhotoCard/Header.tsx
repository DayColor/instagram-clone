import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import { human, systemWeights } from 'react-native-typography';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { fakeAvatar } from '../../utils/constants';
import { makeCircle, makeHitSlop } from '../../utils/themes/metrics';

const styles = StyleSheet.create({
  root: {
    height: 60,
    flexDirection: 'row',
    paddingHorizontal: 16,
  },
  userMetaWrapper: {
    flex: 1,
    flexDirection: 'row',
  },
  btnWrapper: {
    flex: 0.1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarImg: {
    ...makeCircle(40),
  },
  userInfoWrapper: {
    justifyContent: 'center',
    flex: 1,
    paddingLeft: 10,
  },
  username: {
    ...human.subheadObject,
  },
  location: {
    ...human.footnoteObject,
    ...systemWeights.light,
  },
});

const Header = ({
  avatar = fakeAvatar,
  username = 'Jon Doe',
  location = 'Quebec, Canada',
}) => {
  return (
    <View style={styles.root}>
      <View style={styles.userMetaWrapper}>
        <View style={styles.avatarWrapper}>
          <Image source={{ uri: avatar }} style={styles.avatarImg} />
        </View>
        <View style={styles.userInfoWrapper}>
          <Text style={styles.username}>{username}</Text>
          <Text style={styles.location}>{location}</Text>
        </View>
      </View>
      <TouchableOpacity hitSlop={makeHitSlop(20)} style={styles.btnWrapper}>
        <MaterialCommunityIcons name="dots-horizontal" size={25} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
